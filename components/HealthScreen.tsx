import React from 'react';

interface HealthScreenProps {
  onNavigateToHrt: () => void;
  onNavigateToWorkout: () => void;
  onNavigateToPills: () => void;
  onNavigateToRoutine: () => void;
  onNavigateToKostya: () => void;
  onBack: () => void;
}

const HealthScreen: React.FC<HealthScreenProps> = ({ 
  onNavigateToHrt, 
  onNavigateToWorkout, 
  onNavigateToPills, 
  onNavigateToRoutine, 
  onNavigateToKostya, 
  onBack 
}) => {
  const cardClasses = "bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-between text-center transition-all duration-300 hover:bg-slate-800/80 hover:shadow-cyan-500/20";
  const buttonClasses = "bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg mt-6";
  
  return (
    <div className="w-full max-w-5xl mx-auto text-center animate-fade-in">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Спорт і здоровʼя
        </h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* HRT */}
        <div className={cardClasses}>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 flex-grow flex items-center">HRT (Тренування зі зміни звички)</h2>
          <button onClick={onNavigateToHrt} className={buttonClasses}>
            Читати
          </button>
        </div>

        {/* Workout */}
        <div className={cardClasses}>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 flex-grow flex items-center">20-хвилинний комплекс для стабілізації шиї</h2>
          <button onClick={onNavigateToWorkout} className={buttonClasses}>
            Почати
          </button>
        </div>

        {/* Pills */}
        <div className={cardClasses}>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 flex-grow flex items-center">План насичення організму вітамінами та добавками</h2>
          <button onClick={onNavigateToPills} className={buttonClasses}>
            Переглянути
          </button>
        </div>
        
        {/* Routine */}
        <div className={cardClasses}>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 flex-grow flex items-center">План контролю режиму дня</h2>
          <button onClick={onNavigateToRoutine} className={buttonClasses}>
            Стежити
          </button>
        </div>

        {/* Kostya Workout */}
        <div className={cardClasses}>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 flex-grow flex items-center">Тренування Костянтина</h2>
          <button onClick={onNavigateToKostya} className={buttonClasses}>
            Переглянути
          </button>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          На головну
        </button>
      </div>
    </div>
  );
};

export default HealthScreen;