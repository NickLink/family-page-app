import React from 'react';

interface PillsScreenProps {
  onBack: () => void;
}

const PillCard: React.FC<{ title: string; dosage: string; children: React.ReactNode }> = ({ title, dosage, children }) => (
  <div className="bg-slate-900/50 p-6 rounded-lg mb-6">
    <h2 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h2>
    <p className="text-lg text-amber-300 font-semibold mb-3">{dosage}</p>
    <div className="text-slate-400 space-y-2">{children}</div>
  </div>
);

const PillsScreen: React.FC<PillsScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl animate-fade-in text-slate-300 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center">План насичення організму вітамінами та добавками</h1>
      
      <PillCard title="MSM" dosage="Приймати раз в день 2 грами (або як вказано на упаковці)">
        <p>Метилсульфонілметан (MSM) – це природна сполука органічної сірки. MSM краще засвоюється організмом і не є токсичним.</p>
        <p>Корисна дія на організм спортсмена:</p>
        <ul className="list-disc list-inside pl-4">
          <li>зменшує інтенсивність больових імпульсів</li>
          <li>покращує кровообіг та роботу серцевого м'яза</li>
          <li>знімає запалення, зменшує набряклість тканин</li>
          <li>скорочує м'язові спазми</li>
        </ul>
      </PillCard>

      <PillCard title="Metida" dosage="1 саше на добу">
        <p>Метіда рекомендується з метою нормалізації функціонального стану нервової системи при незбалансованому харчуванні або підвищеній потребі у магнії та вітаміні В6, при підвищеній втомлюваності, порушенні сну, дратівливості, тривожності, м’язових судомах.</p>
      </PillCard>
      
      <PillCard title="NAC (N-ацетилцистеїн)" dosage="1 капсула">
        <p>NAC – стабільна форма незамінної амінокислоти цистеїну. Це сірковмісна амінокислота, яка стабілізує формування білкових структур і активізує утворення глутатіону.</p>
        <ul className="list-disc list-inside pl-4">
            <li>володіє антиоксидантними властивостями</li>
            <li>покращує роботу імунної системи</li>
            <li>підтримує здоров’я печінки</li>
            <li>позитивно впливає на функціонування мозку та нейронних тканин</li>
        </ul>
      </PillCard>

      <PillCard title="Polivit" dosage="Таблетка №1 (рожева) вранці, Таблетка №2 (блакитна) через 4-6 годин">
        <p>Додаткове джерело вітамінів групи В (В1; В2; В3; В5; В6; В7; В9; В12) - сприяє загальному зміцненню організму, покращенню функціонального стану нервової системи. Може бути рекомендовано при незбалансованому харчуванні.</p>
      </PillCard>

      <PillCard title="D3 K1 K2" dosage="1 капсула в день після їжі">
        <p>Комплекс вітамінів для підтримки здоров'я кісток, серцево-судинної системи та імунітету.</p>
      </PillCard>

      <div className="text-center mt-8">
        <button
          onClick={onBack}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default PillsScreen;