import React from 'react';

interface RoutineScreenProps {
  onBack: () => void;
}

const RoutineScreen: React.FC<RoutineScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl animate-fade-in text-slate-300 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center">План контролю режиму дня</h1>

      {/* Section I */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">I. План Поступової Зміни Часу Засинання (14 Днів)</h2>
        <p className="mb-4">Перехід від засинання о 02:00 до 00:00 (опівночі) вимагає 6-8 кроків із корекцією на 20 хвилин через день. Важливо не лише лягати раніше, але й вставати раніше, щоб підтримувати сталу "довжину ночі" для організму.</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="p-3 border border-slate-600">Тиждень</th>
                <th className="p-3 border border-slate-600">День</th>
                <th className="p-3 border border-slate-600">Час Засинання (Нова Ціль)</th>
                <th className="p-3 border border-slate-600">Зміна (від попередньої)</th>
              </tr>
            </thead>
            <tbody className="bg-slate-800/60">
              <tr><td className="p-3 border border-slate-700 font-semibold" rowSpan={7}>Тиждень 1</td><td className="p-3 border border-slate-700">День 1</td><td className="p-3 border border-slate-700">01:40</td><td className="p-3 border border-slate-700">На 20 хвилин раніше</td></tr>
              <tr><td className="p-3 border border-slate-700">День 2</td><td className="p-3 border border-slate-700">01:40 (Закріплення)</td><td className="p-3 border border-slate-700">Без змін</td></tr>
              <tr><td className="p-3 border border-slate-700">День 3</td><td className="p-3 border border-slate-700">01:20</td><td className="p-3 border border-slate-700">На 20 хвилин раніше</td></tr>
              <tr><td className="p-3 border border-slate-700">День 4</td><td className="p-3 border border-slate-700">01:20 (Закріплення)</td><td className="p-3 border border-slate-700">Без змін</td></tr>
              <tr><td className="p-3 border border-slate-700">День 5</td><td className="p-3 border border-slate-700">01:00</td><td className="p-3 border border-slate-700">На 20 хвилин раніше</td></tr>
              <tr><td className="p-3 border border-slate-700">День 6</td><td className="p-3 border border-slate-700">01:00 (Закріплення)</td><td className="p-3 border border-slate-700">Без змін</td></tr>
              <tr><td className="p-3 border border-slate-700">День 7</td><td className="p-3 border border-slate-700">00:40</td><td className="p-3 border border-slate-700">На 20 хвилин раніше</td></tr>
              <tr><td className="p-3 border border-slate-700 font-semibold" rowSpan={5}>Тиждень 2</td><td className="p-3 border border-slate-700">День 8</td><td className="p-3 border border-slate-700">00:40 (Закріплення)</td><td className="p-3 border border-slate-700">Без змін</td></tr>
              <tr><td className="p-3 border border-slate-700">День 9</td><td className="p-3 border border-slate-700">00:20</td><td className="p-3 border border-slate-700">На 20 хвилин раніше</td></tr>
              <tr><td className="p-3 border border-slate-700">День 10</td><td className="p-3 border border-slate-700">00:20 (Закріплення)</td><td className="p-3 border border-slate-700">Без змін</td></tr>
              <tr><td className="p-3 border border-slate-700">День 11</td><td className="p-3 border border-slate-700">00:00 (Ціль!)</td><td className="p-3 border border-slate-700">На 20 хвилин раніше</td></tr>
              <tr><td className="p-3 border border-slate-700">День 12-14</td><td className="p-3 border border-slate-700">00:00</td><td className="p-3 border border-slate-700">Закріплення цілі</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Ключові моменти плану:</h3>
        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400">
          <li><strong>Постійний час пробудження (Критично):</strong> Це найважливіше правило. Якщо початковий час пробудження був 10:00, то для цілі 00:00 час пробудження має бути 08:00. Навіть у вихідні відхилення не повинно перевищувати 1 годину.</li>
          <li><strong>Гнучкість:</strong> Якщо відчувається сильне небажання спати, можна зупинитися на поточному часі на 3-4 дні. Не варто чинити опір безсонню.</li>
        </ul>
      </section>

      {/* Section II */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">II. Чому Важливий Ранній Режим Сну</h2>
        <p className="mb-4">Для людини 22 років оптимальна тривалість сну становить 7-9 годин. Раннє засинання має значні переваги, особливо в контексті нервових тіків.</p>
        <h3 className="text-xl font-semibold text-white mb-2">1. Регуляція Циркадних Ритмів</h3>
        <p className="text-slate-400 mb-4">Найглибші та найвідновлювальніші фази сну мають пік приблизно з 23:00 до 03:00. Сон, який починається о 02:00, пропускає значну частину цього "ідеального" вікна.</p>
        <h3 className="text-xl font-semibold text-white mb-2">2. Вплив на Нервову Систему та Тіки</h3>
        <p className="text-slate-400">Хронічне недосипання підвищує рівень кортизолу (гормону стресу) і може посилювати частоту та інтенсивність нервових тіків. Якісний сон покращує когнітивні функції, що допомагає в практиці HRT.</p>
      </section>

      {/* Section III */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">III. Найкращі Практики (Гігієна Сну)</h2>
        <h3 className="text-xl font-semibold text-white mb-2">1. Контроль Світла (Ключовий фактор)</h3>
        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400 mb-4">
          <li><strong>Ранкове Світло:</strong> Після пробудження отримати яскраве світло протягом 10-20 хвилин. Це дає організму сигнал: "День почався!".</li>
          <li><strong>Вечірня Темрява:</strong> За 1-2 години до сну обмежити синє світло (телефони, екрани). Використовуйте фільтри синього світла.</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-2">2. Створення Ритуалу Засинання</h3>
        <p className="text-slate-400 mb-4">За пів години до сну введіть розслаблюючі дії:</p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400 mb-4">
          <li>Тепла ванна або душ.</li>
          <li>Легке розтягування або медитація.</li>
          <li>Запис думок на папері, щоб звільнити розум.</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-2">3. Оточення</h3>
        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400">
          <li>Спальня повинна бути темною, тихою та прохолодною (18-20°C).</li>
          <li>Ліжко — лише для сну, не для роботи чи перегляду соцмереж.</li>
        </ul>
      </section>

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

export default RoutineScreen;