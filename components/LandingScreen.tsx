import React from 'react';

interface LandingScreenProps {
  onNavigateToHealth: () => void;
  onNavigateToLeisure: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onNavigateToHealth, onNavigateToLeisure }) => {
  const cardClasses = "bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-between text-center transition-all duration-300 hover:bg-slate-800/80 hover:shadow-cyan-500/20";
  const buttonClasses = "bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg mt-6";
  
  return (
    <div className="w-full max-w-5xl mx-auto text-center animate-fade-in">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Затишний сімейний закуток
        </h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Health & Sport */}
        <div className={cardClasses}>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 flex-grow flex items-center">Спорт і здоровʼя</h2>
          <button onClick={onNavigateToHealth} className={buttonClasses}>
            Перейти
          </button>
        </div>

        {/* Leisure & Fun */}
        <div className={cardClasses}>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 flex-grow flex items-center">Відпочинок і розваги</h2>
          <button onClick={onNavigateToLeisure} className={buttonClasses}>
            Перейти
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;