import React from 'react';

interface HrtScreenProps {
  onBack: () => void;
}

const HrtScreen: React.FC<HrtScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl animate-fade-in text-slate-300 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6 text-center">HRT (Тренування зі зміни звички) для тіків голови</h1>
      
      <p className="mb-6 text-lg">
        HRT (Тренування зі зміни звички) — це поведінкова терапія, спрямована на усвідомлення та контроль тіків. Вона працює на принципі заміщення тіку конкурентною реакцією (Competing Response), яка є фізично несумісною з тіком.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Етапи HRT</h2>
      <p className="mb-4">HRT складається з трьох основних компонентів:</p>

      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">1. Навчання усвідомленню (Awareness Training)</h3>
          <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400">
            <li>Допомога людині точно ідентифікувати тік (рух головою).</li>
            <li>Найважливіше — навчитися розпізнавати <strong>позивні (премоніторні) відчуття</strong> (premonitory urges), що передують тіку. Це може бути відчуття напруги, свербіння, дискомфорту чи тиску в шиї чи голові. Це відчуття є "сигналом тривоги", який дозволяє втрутитися до того, як тік стане видимим.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">2. Тренування конкурентної реакції (Competing Response Training)</h3>
          <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400">
            <li>Вибір і практика специфічного руху, який фізично не дозволяє виконати тік.</li>
            <li>Цей рух слід виконувати негайно, як тільки виникає позивне відчуття, і утримувати протягом приблизно 60 секунд або доки позивне відчуття не мине.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">3. Мотивація та соціальна підтримка (Motivation and Social Support)</h3>
          <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400">
            <li>Визначення ситуацій, у яких тіки найчастіше виникають.</li>
            <li>Посилення мотивації до використання конкурентної реакції.</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Рекомендації щодо конкурентних реакцій</h2>
      <p className="mb-4">
        Конкурентна реакція має бути: непомітною, легко виконуваною і утримуваною протягом хвилини. Мета — стабілізувати голову та напружити м'язи, протилежні тіку. Оскільки тіки голови можуть бути різними, конкурентна реакція повинна бути підібрана індивідуально.
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-900/50">
            <tr>
              <th className="p-3 border border-slate-600">Тип тіку голови</th>
              <th className="p-3 border border-slate-600">Рекомендована конкурентна реакція (CR)</th>
              <th className="p-3 border border-slate-600">Механізм дії</th>
            </tr>
          </thead>
          <tbody className="bg-slate-800/60">
            <tr>
              <td className="p-3 border border-slate-700 font-semibold">Кивок (рух "так")</td>
              <td className="p-3 border border-slate-700">Легке напруження м'язів шиї та/або легке підняття підборіддя (ніби ви дивитеся на предмет трохи вище рівня очей).</td>
              <td className="p-3 border border-slate-700">Задіює м'язи-розгиначі шиї, які протидіють згинанню (киванню) голови.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-semibold">Хитання (рух "ні")</td>
              <td className="p-3 border border-slate-700">Напруження м'язів задньої частини шиї та легкий нахил плечей вниз (ніби ви трохи витягуєте шию, щоб стати вищим).</td>
              <td className="p-3 border border-slate-700">Стабілізує бічні м'язи шиї та обмежує ротацію (поворот).</td>
            </tr>
             <tr>
              <td className="p-3 border border-slate-700 font-semibold">Різкий поворот голови</td>
              <td className="p-3 border border-slate-700">Легке напруження м'язів шиї та утримання погляду на фіксованій точці прямо перед собою.</td>
              <td className="p-3 border border-slate-700">Напруження м'язів-стабілізаторів утримує голову нерухомою, погляд допомагає зафіксувати положення.</td>
            </tr>
             <tr>
              <td className="p-3 border border-slate-700 font-semibold">Складний тік (плече до вуха, голова нахиляється)</td>
              <td className="p-3 border border-slate-700">Плече притискається донизу (напруження трапецієподібного м'яза) + утримання прямої постави.</td>
              <td className="p-3 border border-slate-700">Одночасне напруження плеча і шиї, що протидіє руху вгору/вбік.</td>
            </tr>
          </tbody>
        </table>
      </div>

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

export default HrtScreen;