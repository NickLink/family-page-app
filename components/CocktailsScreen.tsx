import React from 'react';

interface CocktailsScreenProps {
  onBack: () => void;
}

const CocktailCard: React.FC<{ title: string; concept: string; ingredients: string[]; garnish: string; variations: React.ReactNode; }> = ({ title, concept, ingredients, garnish, variations }) => (
    <div className="bg-slate-900/50 p-6 rounded-lg mb-6">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h3>
        <p className="italic text-slate-400 mb-3">{concept}</p>
        <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">Інгредієнти:</h4>
            <ul className="list-disc list-inside space-y-1 pl-4 text-slate-300">
                {ingredients.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
        <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">Гарнір:</h4>
            <p className="text-slate-300 pl-4">{garnish}</p>
        </div>
        <div>
            <h4 className="font-semibold text-white mb-2">Варіації:</h4>
            <div className="text-slate-400 space-y-2 pl-4">{variations}</div>
        </div>
    </div>
);

const CocktailsScreen: React.FC<CocktailsScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl animate-fade-in text-slate-300 max-w-4xl mx-auto w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6 text-center">Кодекс Коктейлів: 6 Основних Рецептів</h1>
      <p className="mb-4 text-lg text-center">
        Майже кожен коктейль є варіацією одного з шести "кореневих" рецептів. Розуміння цих основ дозволяє побачити закономірності у світі міксології.
      </p>
      <div className="text-center mb-8">
        <a 
          href="https://youtu.be/0ieRyJeuV-E" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200 text-lg inline-flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Переглянути відео-джерело</span>
        </a>
      </div>

      <CocktailCard 
        title="1. Олд Фешн (The Old Fashioned)"
        concept="Коктейль, де головну роль відіграє базовий міцний напій."
        ingredients={[
          "1 кубик цукру",
          "2 деші біттера Angostura",
          "2 деші біттера Peychaud's",
          "60 мл (2 унції) бурбону"
        ]}
        garnish="Цедра апельсина та лимона."
        variations={<p>Зміна елементів створює нові напої, такі як Oaxacan Old Fashioned (з текілою/мескалем), Sazerac або Mint Julep.</p>}
      />

      <CocktailCard 
        title="2. Мартіні (The Martini)"
        concept="Класичне поєднання джину та вермуту."
        ingredients={[
          "67,5 мл (2.25 унції) джину",
          "22,5 мл (0.75 унції) сухого вермуту",
          "2 деші апельсинового біттера"
        ]}
        garnish="Лимонна цедра."
        variations={<p>Зміна пропорцій створює варіації, наприклад, «сухий» мартіні (менше вермуту) або «мокрий» мартіні (більше вермуту).</p>}
      />

      <CocktailCard 
        title="3. Дайкірі (The Daiquiri, або 'Сауер')"
        concept="Простий баланс міцного напою, цитрусових та цукру."
        ingredients={[
          "60 мл (2 унції) світлого рому",
          "22,5 мл (0.75 унції) свіжого соку лайма",
          "22,5 мл (0.75 унції) простого сиропу"
        ]}
        garnish="Відсутній у джерелі (зазвичай, скибочка лайма)."
        variations={
          <ul className="list-disc list-inside">
            <li><strong>Гімлет (Gimlet):</strong> Використовує джин.</li>
            <li><strong>Кайпіринья (Caipirinha):</strong> Використовує кашасу.</li>
            <li><strong>Піско Сауер (Pisco Sour):</strong> Використовує піско та додає яєчний білок.</li>
            <li><strong>Віскі Сауер (Whiskey Sour):</strong> Використовує віскі.</li>
          </ul>
        }
      />

      <CocktailCard 
        title="4. Сайдкар (The Sidecar)"
        concept="Коктейль, побудований на коньяку, цитрусових та апельсиновому лікері."
        ingredients={[
          "45 мл (1.5 унції) коньяку",
          "30 мл (1 унція) сухого кюрасао",
          "22,5 мл (0.75 унції) лимонного соку",
          "1 барна ложка простого сиропу"
        ]}
        garnish="Апельсинова цедра."
        variations={<p>Цей шаблон є предком для Маргарити (текіла), Білої Леді (джин), The Last Word, Cosmopolitan та Corpse Reviver No. 2.</p>}
      />

      <CocktailCard 
        title="5. Віскі Хайбол (The Whiskey Highball)"
        concept="Простий, газований коктейль, призначений для подовження та освіження базового міцного напою."
        ingredients={[
          "60 мл (2 унції) скотчу",
          "Содова вода (долити доверху)"
        ]}
        garnish="Відсутній у джерелі (зазвичай, цедра лимона)."
        variations={<p>Інші відомі хайболи включають Джин-тонік, Палома та Батанга.</p>}
      />

      <CocktailCard 
        title="6. Фліп (The Flip)"
        concept="Насичений, текстурний коктейль, що традиційно характеризується кріпленим вином та використанням цілого яйця."
        ingredients={[
          "1 ціле яйце",
          "60 мл (2 унції) хересу (Олоросо)",
          "15 мл (0.5 унції) сиропу демерара"
        ]}
        garnish="Тертий мускатний горіх."
        variations={<p>Егг-ног є поширеним типом фліпу. Коли яйце замінюють вершками або молоком, ви отримуєте напої, як-от Білий Руський, Піна Колада, Коник (Grasshopper) та Зсув (Mudslide).</p>}
      />

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

export default CocktailsScreen;