
import React from 'react';

interface CompletionScreenProps {
  onRestart: () => void;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ onRestart }) => {
  return (
    <div className="text-center bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl animate-fade-in">
      <h1 className="text-5xl font-bold text-cyan-300 mb-4">Тренування завершено!</h1>
      <p className="text-2xl text-slate-300 mb-8">Аня, ти молодець!</p>
      <button
        onClick={onRestart}
        className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 px-10 rounded-full text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        Повторити
      </button>
    </div>
  );
};

export default CompletionScreen;
