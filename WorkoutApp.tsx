import React, { useState, useRef, useCallback } from 'react';
import { WORKOUT_PLAN } from './constants';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';
import StartScreen from './components/StartScreen';
import WorkoutView from './components/WorkoutView';
import CompletionScreen from './components/CompletionScreen';

type WorkoutState = 'idle' | 'running' | 'finished';

const BACKGROUND_MUSIC_URL = 'https://cdn.pixabay.com/audio/2022/10/21/audio_162140d346.mp3';

interface WorkoutAppProps {
  onBack: () => void;
}


export default function WorkoutApp({ onBack }: WorkoutAppProps) {
  const [workoutState, setWorkoutState] = useState<WorkoutState>('idle');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { speak } = useSpeechSynthesis();

  const handleStart = useCallback(() => {
    // Start music playback immediately upon user interaction to comply with browser autoplay policies.
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      setIsMusicPlaying(true);
    }
    
    // Define the callback to change the state to 'running' after the speech.
    const startWorkoutFlow = () => {
      setWorkoutState('running');
    };
    
    // Announce the motivational phrase, then start the workout flow.
    speak("Аня ти це можеш!", startWorkoutFlow);
  }, [speak]);

  const handleExerciseComplete = useCallback(() => {
    if (currentExerciseIndex < WORKOUT_PLAN.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      setWorkoutState('finished');
      speak("Аня ти молодець");
      if (audioRef.current) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      }
    }
  }, [currentExerciseIndex, speak]);
  
  const handleRestart = useCallback(() => {
    setCurrentExerciseIndex(0);
    setWorkoutState('idle');
  }, []);

  const toggleMusic = useCallback(() => {
    setIsMusicPlaying(prev => {
      const isNowPlaying = !prev;
      if (isNowPlaying) {
        audioRef.current?.play().catch(e => console.error("Audio play failed:", e));
      } else {
        audioRef.current?.pause();
      }
      return isNowPlaying;
    });
  }, []);

  const renderContent = () => {
    switch (workoutState) {
      case 'running':
        return (
          <WorkoutView
            key={currentExerciseIndex}
            exercise={WORKOUT_PLAN[currentExerciseIndex]}
            onComplete={handleExerciseComplete}
            currentIndex={currentExerciseIndex}
            totalExercises={WORKOUT_PLAN.length}
            isMusicPlaying={isMusicPlaying}
            onToggleMusic={toggleMusic}
          />
        );
      case 'finished':
        return <CompletionScreen onRestart={handleRestart} />;
      case 'idle':
      default:
        return <StartScreen onStart={handleStart} onBack={onBack} />;
    }
  };

  return (
    <>
      <audio ref={audioRef} src={BACKGROUND_MUSIC_URL} loop />
      <div className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </div>
    </>
  );
}