import React from 'react';

interface LeisureScreenProps {
  onBack: () => void;
  onNavigateToCocktails: () => void;
}

const LeisureScreen: React.FC<LeisureScreenProps> = ({ onBack, onNavigateToCocktails }) => {
  const cardClasses = "bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-between text-center transition-all duration-300 hover:bg-slate-800/80 hover:shadow-cyan-500/20";
  const buttonClasses = "bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg mt-6";
  
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl animate-fade-in text-slate-300 max-w-4xl mx-auto w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center">Відпочинок і розваги</h1>
      
      <div className="flex justify-center">
        <div className={cardClasses}>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 flex-grow flex items-center">Коктейлі</h2>
            <button onClick={onNavigateToCocktails} className={buttonClasses}>
              Перейти
            </button>
        </div>
      </div>


      <div className="text-center mt-8">
        <button
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default LeisureScreen;