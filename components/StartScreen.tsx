import React from 'react';

interface StartScreenProps {
  onStart: () => void;
  onBack: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, onBack }) => {
  return (
    <div className="text-center bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-2">20-хвилинний комплекс</h1>
      <p className="text-xl text-slate-300 mb-6">для стабілізації шиї</p>
      <div className="text-left max-w-lg mx-auto text-slate-400 space-y-2 mb-8">
        <p><strong>Мета:</strong> Зміцнення глибоких м'язів-стабілізаторів шиї, покращення постави та свідомий контроль над рухами.</p>
        <p><strong>Важливо:</strong> Всі рухи виконуйте дуже повільно та контрольовано, уникаючи різких рухів. Зосередьтеся на диханні.</p>
      </div>
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-10 rounded-full text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full sm:w-auto"
        >
          Назад
        </button>
        <button
          onClick={onStart}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 px-10 rounded-full text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full sm:w-auto"
        >
          Старт
        </button>
      </div>
    </div>
  );
};

export default StartScreen;