import React, { useState, useEffect, useRef } from 'react';
import { Exercise } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import CircularProgress from './CircularProgress';

interface WorkoutViewProps {
  exercise: Exercise;
  onComplete: () => void;
  currentIndex: number;
  totalExercises: number;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

const WorkoutView: React.FC<WorkoutViewProps> = ({ exercise, onComplete, currentIndex, totalExercises, isMusicPlaying, onToggleMusic }) => {
  const [timeLeft, setTimeLeft] = useState(exercise.duration);
  const [isPaused, setIsPaused] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const { speak } = useSpeechSynthesis();
  // FIX: Explicitly initialize useRef with `undefined` to fix "Expected 1 arguments, but got 0" error which can occur with older React types.
  const timerIdRef = useRef<number | undefined>(undefined);

  // Effect for announcing the exercise once
  useEffect(() => {
    const startTimerCallback = () => {
      if (!isPaused) {
        setTimerStarted(true);
      }
    };
    speak(`Наступна вправа: ${exercise.name}`, startTimerCallback);

    return () => {
      if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise, speak]);

  // Effect for managing the countdown timer
  useEffect(() => {
    if (timerStarted && !isPaused) {
      timerIdRef.current = window.setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerIdRef.current as number);
            onComplete();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerIdRef.current);
    }

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [timerStarted, isPaused, onComplete]);

  const handleTogglePause = () => {
    setIsPaused(prev => {
      const newPausedState = !prev;
      if (newPausedState) {
        window.speechSynthesis.pause();
      } else {
        window.speechSynthesis.resume();
        setTimerStarted(true); // Ensure timer continues after resume
      }
      return newPausedState;
    });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const overallProgress = ((currentIndex + 1) / totalExercises) * 100;

  const controlButtonClasses = "bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 rounded-full p-3 transition-colors duration-200";
  
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col items-center animate-fade-in">
      <div className="w-full mb-4">
        <div className="flex justify-between items-center mb-1 text-slate-400">
          <span>Прогрес</span>
          <span>{currentIndex + 1} / {totalExercises}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5">
          <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: `${overallProgress}%` }}></div>
        </div>
      </div>

      <div className="relative my-6">
        <CircularProgress 
            progress={(timeLeft / exercise.duration) * 100}
            size={200}
            strokeWidth={12}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl font-bold tracking-tighter text-white">{formatTime(timeLeft)}</span>
          <span className="text-slate-400 text-lg">{exercise.phase}</span>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{exercise.name}</h2>
        <p className="text-lg text-slate-300 mb-4">{exercise.description}</p>
        <div className="bg-slate-900/50 p-4 rounded-lg">
          <p className="text-md text-slate-400"><strong>Повторення:</strong> {exercise.reps}</p>
          <p className="text-md text-slate-400"><strong>Примітки:</strong> {exercise.notes}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onToggleMusic} className={controlButtonClasses} aria-label={isMusicPlaying ? "Вимкнути музику" : "Увімкнути музику"}>
          {isMusicPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6.375a9 9 0 0 1 12.728 0M16.463 8.288 12 12.751 7.537 8.288c-.76-.76-1.76-1.18-2.82-1.18a3.989 3.989 0 0 0-2.828 1.181A3.989 3.989 0 0 0 1.5 12c0 1.052.42 2.052 1.182 2.828a3.989 3.989 0 0 0 2.828 1.182c1.06 0 2.06-.42 2.82-1.182L12 12.751l4.463 4.463c.76.76 1.76 1.18 2.82 1.18a3.989 3.989 0 0 0 2.828-1.181A3.989 3.989 0 0 0 22.5 12c0-1.052-.42-2.052-1.182-2.828a3.989 3.989 0 0 0-2.828-1.182c-1.06 0-2.06.42-2.82 1.182Z" />
            </svg>
          )}
        </button>
        <button onClick={handleTogglePause} className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-6 rounded-full text-lg flex items-center gap-2 transition-colors duration-200">
          {isPaused ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75Z" />
              </svg>
              <span>Продовжити</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
              <span>Пауза</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default WorkoutView;