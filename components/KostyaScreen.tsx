import React, { useState, useEffect, useRef } from 'react';

// To satisfy TypeScript since Chart.js is loaded from a CDN
declare const Chart: any;

interface KostyaScreenProps {
  onBack: () => void;
}

const translations = {
    en: {
        mainTitle: '3-Day Muscle Growth Program',
        subTitle: 'Your interactive guide to a knee-friendly hypertrophy plan.',
        principlesTitle: 'Important Principles for Success',
        principlesIntro: 'This section outlines the core concepts crucial for maximizing muscle growth and ensuring safety. Understanding and applying these principles consistently will be the foundation of your progress.',
        progressiveOverload: 'Progressive Overload',
        progressiveOverloadDesc: 'The key to muscle growth. Aim to gradually increase the weight you lift over time. Once you can comfortably perform the upper end of the rep range with good form, increase the weight slightly in your next session.',
        mindMuscle: 'Mind-Muscle Connection',
        mindMuscleDesc: 'Don\'t just lift the weight. Focus on squeezing the target muscle with every repetition. This enhances muscle activation and growth.',
        properForm: 'Proper Form',
        properFormDesc: 'Always prioritize correct form over lifting heavy. This prevents injury, especially with your knee concerns, and ensures the right muscles are being worked.',
        restNutrition: 'Rest & Nutrition',
        restNutritionDesc: 'Muscles grow when you rest. Get 7-9 hours of quality sleep. To build muscle, eat enough protein (1.6-2.2g per kg of body weight) and be in a slight calorie surplus.',
        supplements: 'Sports Supplements',
        supplementsIntro: 'While not necessary, some supplements are well-researched and can safely support your goals. Always consult a doctor before starting any new supplement.',
        creatine: 'Creatine Monohydrate',
        creatineDesc: 'The most studied supplement for performance. It helps your muscles produce energy during heavy lifting, leading to increased strength and muscle mass over time.',
        dosage: 'Dosage:',
        dosageDesc: 'Take 3-5 grams daily. There is no need for a "loading phase." Mix it with water, juice, or your protein shake. Timing is not critical, but consistency is key.',
        day1Btn: 'Day 1: Push',
        day2Btn: 'Day 2: Pull',
        day3Btn: 'Day 3: Full Body',
        day1Title: 'Day 1: Push Day',
        day1Desc: 'This workout focuses on the pushing muscles of the upper body: chest, shoulders, and triceps. The volume is balanced across these groups to promote proportional growth.',
        day2Title: 'Day 2: Pull Day',
        day2Desc: 'This session targets the pulling muscles: the entire back and biceps. The focus is on building width and thickness in the back, complemented by direct arm work.',
        day3Title: 'Day 3: Full Body & Legs',
        day3Desc: 'This workout stimulates muscles throughout the body, with a special emphasis on knee-friendly leg exercises to build a strong foundation. Upper body exercises are included to increase weekly training frequency.',
        chartTitle: 'Muscle Group Volume (Total Sets)',
        watchVideo: 'Watch Video',
        chartLabels: {
            chest: 'Chest', shoulders: 'Shoulders', triceps: 'Triceps',
            back: 'Back', biceps: 'Biceps', legs: 'Legs',
        },
        ex1_1_title: 'Incline Dumbbell Press: 4 sets, 8-12 reps',
        ex1_1_desc: 'Lie on an incline bench (30-45 degrees). Hold dumbbells at chest level, palms forward. Press up until your arms are extended but not locked. Lower slowly.',
        ex1_2_title: 'Flat Barbell Bench Press: 4 sets, 8-12 reps',
        ex1_2_desc: 'Lie on a flat bench. Grip the bar slightly wider than your shoulders. Lower it to your mid-chest, keeping elbows at a 45-degree angle. Press powerfully back up.',
        ex1_3_title: 'Cable Crossover: 3 sets, 10-15 reps',
        ex1_3_desc: 'Set pulleys high. Stand in the middle, grab handles, and step forward. With elbows slightly bent, pull handles down and across your body until they meet. Squeeze your chest, then return slowly.',
        ex1_4_title: 'Seated Dumbbell Shoulder Press: 4 sets, 8-12 reps',
        ex1_4_desc: 'Sit on a bench with back support. Hold dumbbells at shoulder height, palms forward. Press weights overhead until arms are fully extended. Lower slowly.',
        ex1_5_title: 'Dumbbell Lateral Raise: 3 sets, 12-15 reps',
        ex1_5_desc: 'Stand with dumbbells at your sides. With a slight bend in your elbows, raise weights out to your sides to shoulder level. Lead with your elbows and lower with control.',
        ex1_6_title: 'Triceps Pushdown (Rope): 4 sets, 10-15 reps',
        ex1_6_desc: 'Attach a rope to a high pulley. Keep elbows pinned to your sides and push the rope down until arms are fully extended, separating the rope ends. Return slowly.',
        ex1_7_title: 'Overhead Dumbbell Extension: 3 sets, 10-12 reps',
        ex1_7_desc: 'Sit or stand holding one dumbbell with both hands overhead. Lower it behind your head by bending your elbows. Extend your arms to raise it back to the start.',
        ex2_1_title: 'Pull-Ups (or Lat Pulldown): 4 sets, 6-10 reps',
        ex2_1_desc: 'Pull-ups: Grab bar, hang, and pull chest to bar. Lat Pulldowns: Sit, secure knees, pull bar to upper chest. Squeeze back muscles on both.',
        ex2_2_title: 'Barbell Bent-Over Row: 4 sets, 8-12 reps',
        ex2_2_desc: 'Hinge at your hips with a straight back. Pull the barbell towards your lower chest, squeezing your back muscles. Lower under control.',
        ex2_3_title: 'Seated Cable Row: 3 sets, 10-12 reps',
        ex2_3_desc: 'Sit with chest up and back straight. Pull the handle towards your abdomen, squeezing your shoulder blades together. Slowly extend your arms.',
        ex2_4_title: 'Face Pulls: 3 sets, 15-20 reps',
        ex2_4_desc: 'Set a rope on a cable machine at eye level. Pull the rope towards your face, aiming to get your hands by your ears. Squeeze your rear shoulders.',
        ex2_5_title: 'Barbell Bicep Curl: 4 sets, 8-12 reps',
        ex2_5_desc: 'Stand with elbows pinned to your sides. Curl the barbell up towards your shoulders without swinging. Squeeze your biceps at the top and lower slowly.',
        ex2_6_title: 'Incline Dumbbell Curl: 3 sets, 10-12 reps',
        ex2_6_desc: 'Sit on an incline bench. Let arms hang straight down. Curl the dumbbells up, rotating wrists so palms face shoulders at the top. Lower slowly for a full stretch.',
        ex2_7_title: 'Hammer Curl: 3 sets, 10-12 reps',
        ex2_7_desc: 'Stand holding dumbbells with a neutral grip (palms facing in). Keep elbows at your sides and curl the weights up towards your shoulders. Lower with control.',
        ex3_1_title: 'Leg Press: 4 sets, 10-15 reps',
        ex3_1_desc: 'Sit with feet shoulder-width apart on the platform. Lower the weight until knees are at a 90-degree angle. Press back up, but do not lock your knees.',
        ex3_2_title: 'Romanian Deadlift (Dumbbell): 4 sets, 10-12 reps',
        ex3_2_desc: 'Hold dumbbells in front of your thighs. Hinge at your hips with a slight knee bend and straight back. Lower the weights, then return by squeezing glutes.',
        ex3_3_title: 'Leg Extension Machine: 3 sets, 12-15 reps',
        ex3_3_desc: 'Sit on the machine, shins against the pad. Extend your legs until they are straight, squeezing your quads at the top. Lower with control.',
        ex3_4_title: 'Seated Hamstring Curl: 3 sets, 12-15 reps',
        ex3_4_desc: 'Position the pad above your ankles. Curl your legs down and back as far as possible, squeezing your hamstrings. Return slowly to the start.',
        ex3_5_title: 'Seated Calf Raise: 4 sets, 15-20 reps',
        ex3_5_desc: 'Place the balls of your feet on the platform. Lower your heels for a stretch, then press up onto your toes as high as possible, squeezing your calves.',
        ex3_6_title: 'Dumbbell Bench Press: 3 sets, 8-12 reps',
        ex3_6_desc: 'Lie on a flat bench holding dumbbells at your chest. Press the weights up until your arms are fully extended. Lower slowly to the sides of your chest.',
        ex3_7_title: 'Single-Arm Dumbbell Row: 3 sets, 8-12 reps',
        ex3_7_desc: 'Place one knee and hand on a bench. Hold a dumbbell in the opposite hand and pull it towards your hip, keeping your back straight. Lower with control.',
        ex3_8_title: 'Arnold Press: 3 sets, 10-12 reps',
        ex3_8_desc: 'Sit holding dumbbells in front of shoulders, palms facing you. As you press overhead, rotate your hands so palms face forward at the top. Reverse the motion on the way down.'
    },
    ua: {
        mainTitle: '3-денна програма для росту м\'язів',
        subTitle: 'Ваш інтерактивний посібник з гіпертрофії, дружній до колін.',
        principlesTitle: 'Важливі принципи успіху',
        principlesIntro: 'Цей розділ окреслює ключові концепції, що є вирішальними для максимізації росту м\'язів та забезпечення безпеки. Розуміння та послідовне застосування цих принципів стане основою вашого прогресу.',
        progressiveOverload: 'Прогресивне перевантаження',
        progressiveOverloadDesc: 'Ключ до росту м\'язів. Намагайтеся поступово збільшувати вагу, яку піднімаєте. Коли ви зможете комфортно виконувати верхню межу діапазону повторень з гарною технікою, трохи збільште вагу на наступному тренуванні.',
        mindMuscle: 'Зв\'язок "мозок-м\'язи"',
        mindMuscleDesc: 'Не просто піднімайте вагу. Зосередьтеся на скороченні цільового м\'яза при кожному повторенні. Це посилює активацію м\'язів та їх ріст.',
        properForm: 'Правильна техніка',
        properFormDesc: 'Завжди надавайте перевагу правильній техніці, а не підняттю великої ваги. Це запобігає травмам, особливо зважаючи на ваші коліна, і гарантує, що працюють правильні м\'язи.',
        restNutrition: 'Відпочинок та харчування',
        restNutritionDesc: 'М\'язи ростуть, коли ви відпочиваєте. Спіть 7-9 годин якісного сну. Щоб нарощувати м\'язи, споживайте достатньо білка (1.6-2.2 г на кг ваги тіла) і перебувайте в невеликому профіциті калорій.',
        supplements: 'Спортивні добавки',
        supplementsIntro: 'Хоча вони не є обов\'язковими, деякі добавки добре досліджені і можуть безпечно підтримати ваші цілі. Завжди консультуйтеся з лікарем перед початком прийому будь-яких нових добавок.',
        creatine: 'Креатин моногідрат',
        creatineDesc: 'Найбільш вивчена добавка для підвищення продуктивності. Він допомагає вашим м\'язам виробляти енергію під час важких навантажень, що з часом призводить до збільшення сили та м\'язової маси.',
        dosage: 'Дозування:',
        dosageDesc: 'Приймайте 3-5 грамів щодня. Немає потреби у "фазі завантаження". Змішуйте його з водою, соком або протеїновим коктейлем. Час прийому не є критичним, але ключовою є послідовність.',
        day1Btn: 'День 1: Жим',
        day2Btn: 'День 2: Тяга',
        day3Btn: 'День 3: Все тіло',
        day1Title: 'День 1: Жимовий день',
        day1Desc: 'Це тренування фокусується на жимових м\'язах верхньої частини тіла: груди, плечі та трицепси. Обсяг збалансований між цими групами для сприяння пропорційному росту.',
        day2Title: 'День 2: Тяговий день',
        day2Desc: 'Ця сесія націлена на тягові м\'язи: вся спина та біцепси. Основна увага приділяється розбудові ширини та товщини спини, що доповнюється прямою роботою на руки.',
        day3Title: 'День 3: Все тіло та ноги',
        day3Desc: 'Це тренування стимулює м\'язи всього тіла, з особливим акцентом на вправи для ніг, дружні до колін, для створення міцної основи. Вправи для верхньої частини тіла включені для збільшення щотижневої частоти тренувань.',
        chartTitle: 'Обсяг за групами м\'язів (всього сетів)',
        watchVideo: 'Дивитися відео',
        chartLabels: {
            chest: 'Груди', shoulders: 'Плечі', triceps: 'Трицепс',
            back: 'Спина', biceps: 'Біцепс', legs: 'Ноги'
        },
        ex1_1_title: 'Жим гантелей на похилій лаві: 4 підходи, 8-12 повторень',
        ex1_1_desc: 'Ляжте на похилу лаву (30-45 градусів). Тримайте гантелі на рівні грудей, долоні вперед. Витискайте вгору, поки руки не будуть випрямлені, але не заблоковані. Повільно опускайте.',
        ex1_2_title: 'Жим штанги лежачи: 4 підходи, 8-12 повторень',
        ex1_2_desc: 'Ляжте на горизонтальну лаву. Візьміться за гриф трохи ширше плечей. Опустіть його до середини грудей, тримаючи лікті під кутом 45 градусів. Потужно витисніть назад.',
        ex1_3_title: 'Кросовер на блоці: 3 підходи, 10-15 повторень',
        ex1_3_desc: 'Встановіть блоки високо. Станьте посередині, візьміть ручки і зробіть крок вперед. Злегка зігнувши лікті, тягніть ручки вниз і через тіло, доки вони не зустрінуться. Стисніть груди, потім повільно повертайтеся.',
        ex1_4_title: 'Жим гантелей сидячи: 4 підходи, 8-12 повторень',
        ex1_4_desc: 'Сядьте на лаву з опорою для спини. Тримайте гантелі на рівні плечей, долоні вперед. Витискайте вагу над головою, доки руки не будуть повністю випрямлені. Повільно опускайте.',
        ex1_5_title: 'Махи гантелями в сторони: 3 підходи, 12-15 повторень',
        ex1_5_desc: 'Станьте з гантелями з боків. Злегка зігнувши лікті, піднімайте вагу в сторони до рівня плечей. Ведіть ліктями і опускайте під контролем.',
        ex1_6_title: 'Розгинання на трицепс (канат): 4 підходи, 10-15 повторень',
        ex1_6_desc: 'Прикріпіть канат до високого блоку. Тримайте лікті притиснутими до боків і тисніть канат вниз, доки руки не будуть повністю випрямлені, розводячи кінці каната. Повільно повертайтеся.',
        ex1_7_title: 'Французький жим з гантеллю над головою: 3 підходи, 10-12 повторень',
        ex1_7_desc: 'Сядьте або станьте, тримаючи одну гантель обома руками над головою. Опускайте її за голову, згинаючи лікті. Випрямте руки, щоб підняти її назад.',
        ex2_1_title: 'Підтягування (або тяга верхнього блоку): 4 підходи, 6-10 повторень',
        ex2_1_desc: 'Підтягування: Візьміться за перекладину, повисніть і підтягніть груди до перекладини. Тяга верхнього блоку: Сядьте, зафіксуйте коліна, тягніть гриф до верхньої частини грудей. Скорочуйте м\'язи спини.',
        ex2_2_title: 'Тяга штанги в нахилі: 4 підходи, 8-12 повторень',
        ex2_2_desc: 'Нахиліться в стегнах з прямою спиною. Тягніть штангу до нижньої частини грудей, скорочуючи м\'язи спини. Опускайте під контролем.',
        ex2_3_title: 'Горизонтальна тяга на блоці: 3 підходи, 10-12 повторень',
        ex2_3_desc: 'Сядьте з піднятими грудьми і прямою спиною. Тягніть ручку до живота, зводячи лопатки разом. Повільно випрямляйте руки.',
        ex2_4_title: 'Тяга до обличчя: 3 підходи, 15-20 повторень',
        ex2_4_desc: 'Встановіть канат на блоці на рівні очей. Тягніть канат до обличчя, намагаючись довести руки до вух. Скорочуйте задні дельти.',
        ex2_5_title: 'Згинання рук зі штангою: 4 підходи, 8-12 повторень',
        ex2_5_desc: 'Станьте, притиснувши лікті до боків. Згинайте руки зі штангою до плечей без розгойдування. Стисніть біцепси вгорі і повільно опускайте.',
        ex2_6_title: 'Згинання рук з гантелями на похилій лаві: 3 підходи, 10-12 повторень',
        ex2_6_desc: 'Сядьте на похилу лаву. Руки вільно звисають. Згинайте руки з гантелями, обертаючи зап\'ястя так, щоб долоні дивилися на плечі вгорі. Повільно опускайте для повного розтягнення.',
        ex2_7_title: 'Молоткові згинання: 3 підходи, 10-12 повторень',
        ex2_7_desc: 'Станьте, тримаючи гантелі нейтральним хватом (долоні всередину). Тримайте лікті з боків і згинайте руки до плечей. Опускайте під контролем.',
        ex3_1_title: 'Жим ногами: 4 підходи, 10-15 повторень',
        ex3_1_desc: 'Сядьте, поставивши ноги на ширині плечей на платформу. Опускайте вагу, доки коліна не будуть під кутом 90 градусів. Витискайте назад, але не блокуйте коліна.',
        ex3_2_title: 'Румунська станова тяга (з гантелями): 4 підходи, 10-12 повторень',
        ex3_2_desc: 'Тримайте гантелі перед стегнами. Нахиліться в стегнах з легким згином в колінах і прямою спиною. Опускайте вагу, потім повертайтеся, стискаючи сідниці.',
        ex3_3_title: 'Розгинання ніг на тренажері: 3 підходи, 12-15 повторень',
        ex3_3_desc: 'Сядьте на тренажер, гомілки під валиком. Розгинайте ноги, доки вони не будуть прямими, стискаючи квадрицепси вгорі. Опускайте під контролем.',
        ex3_4_title: 'Згинання ніг сидячи: 3 підходи, 12-15 повторень',
        ex3_4_desc: 'Розмістіть валик над щиколотками. Згинайте ноги вниз і назад якомога далі, стискаючи біцепси стегон. Повільно повертайтеся у вихідне положення.',
        ex3_5_title: 'Підйоми на литки сидячи: 4 підходи, 15-20 повторень',
        ex3_5_desc: 'Поставте подушечки стоп на платформу. Опустіть п\'яти для розтягнення, потім підніміться на носки якомога вище, стискаючи литки.',
        ex3_6_title: 'Жим гантелей лежачи: 3 підходи, 8-12 повторень',
        ex3_6_desc: 'Ляжте на горизонтальну лаву, тримаючи гантелі біля грудей. Витискайте вагу вгору, доки руки не будуть повністю випрямлені. Повільно опускайте з боків грудей.',
        ex3_7_title: 'Тяга гантелі однією рукою: 3 підходи, 8-12 повторень',
        ex3_7_desc: 'Поставте одне коліно і руку на лаву. Тримайте гантель в протилежній руці і тягніть її до стегна, тримаючи спину прямою. Опускайте під контролем.',
        ex3_8_title: 'Жим Арнольда: 3 підходи, 10-12 повторень',
        ex3_8_desc: 'Сядьте, тримаючи гантелі перед плечима, долоні до себе. Під час жиму над головою, обертайте руки так, щоб долоні дивилися вперед вгорі. Зворотній рух на шляху вниз.'
    }
};

const chartDataConfig = {
    day1: {
        labelKeys: ['chest', 'shoulders', 'triceps'],
        data: [11, 7, 7],
        colors: ['#0d9488', '#14b8a6', '#5eead4'],
    },
    day2: {
        labelKeys: ['back', 'biceps'],
        data: [14, 10],
        colors: ['#0f766e', '#0d9488'],
    },
    day3: {
        labelKeys: ['legs', 'chest', 'back', 'shoulders'],
        data: [18, 3, 3, 3],
        colors: ['#115e59', '#0f766e', '#0d9488', '#14b8a6'],
    }
};

type Day = 'day1' | 'day2' | 'day3';
type Lang = 'en' | 'ua';


const KostyaScreen: React.FC<KostyaScreenProps> = ({ onBack }) => {
    const [activeDay, setActiveDay] = useState<Day>('day1');
    const [lang, setLang] = useState<Lang>('ua');
    const chartRef = useRef<any>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const t = translations[lang];

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            const config = chartDataConfig[activeDay];
            const translatedLabels = config.labelKeys.map(key => t.chartLabels[key as keyof typeof t.chartLabels]);

            chartRef.current = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: translatedLabels,
                    datasets: [{
                        label: 'Total Sets',
                        data: config.data,
                        backgroundColor: config.colors,
                        borderColor: '#ffffff',
                        borderWidth: 3,
                        hoverOffset: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#334155',
                                font: {
                                    size: 14,
                                    family: 'Inter, sans-serif'
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context: any) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed !== null) {
                                        label += context.parsed + (lang === 'ua' ? ' сетів' : ' sets');
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    cutout: '60%'
                }
            });
        }
        // Cleanup function to destroy chart instance on component unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [activeDay, lang, t.chartLabels]);
    
    const renderExercise = (id: string, videoUrl: string) => {
      const titleKey = `ex${id}_title` as keyof typeof t;
      const descKey = `ex${id}_desc` as keyof typeof t;
      
      return (
        <details className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
          <summary className="p-4 cursor-pointer font-semibold flex justify-between items-center hover:bg-stone-50 transition-colors">
            {/* FIX: Cast to string to resolve TypeScript error where `t[titleKey]` could be an object. */}
            <span>{t[titleKey] as string}</span>
            <span className="summary-arrow text-teal-600">▼</span>
          </summary>
          <div className="p-4 border-t border-stone-200">
            <div className="text-stone-700">
              <p>
                {/* FIX: Cast to string to resolve TypeScript error where `t[descKey]` could be an object. */}
                {t[descKey] as string}{' '}
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">{t.watchVideo}</a>
              </p>
            </div>
          </div>
        </details>
      );
    };

    const DayButton: React.FC<{ day: Day; label: string }> = ({ day, label }) => {
        const isActive = activeDay === day;
        const activeClasses = 'bg-teal-600 text-white';
        const inactiveClasses = 'bg-white text-teal-600 hover:bg-stone-100';
        return (
            <button
                onClick={() => setActiveDay(day)}
                className={`flex-1 md:flex-none md:px-8 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 transition-all transform hover:scale-105 ${isActive ? activeClasses : inactiveClasses}`}
            >
                {label}
            </button>
        );
    };

    const LangButton: React.FC<{ targetLang: Lang, label: string }> = ({ targetLang, label }) => {
      const isActive = lang === targetLang;
      const activeClasses = 'bg-teal-600 text-white';
      const inactiveClasses = 'bg-white border-2 border-teal-600 text-teal-600';
      return (
        <button 
          onClick={() => setLang(targetLang)}
          className={`lang-btn w-10 h-10 font-bold rounded-full transition-colors ${isActive ? activeClasses : inactiveClasses}`}>
            {label}
        </button>
      );
    }
    
    const workoutContent = {
        day1: (
            <div className="space-y-4">
                {renderExercise('1_1', 'https://www.youtube.com/watch?v=8iPEnn-ltC8')}
                {renderExercise('1_2', 'https://www.youtube.com/watch?v=rT7DgCr-3pg')}
                {renderExercise('1_3', 'https://www.youtube.com/watch?v=taI4XduLpTk')}
                {renderExercise('1_4', 'https://www.youtube.com/watch?v=qEwKCR5JCog')}
                {renderExercise('1_5', 'https://www.youtube.com/watch?v=3VcKaXpzqRo')}
                {renderExercise('1_6', 'https://www.youtube.com/watch?v=vB5OHsJ3EME')}
                {renderExercise('1_7', 'https://www.youtube.com/watch?v=CbfgaLe-qsc')}
            </div>
        ),
        day2: (
            <div className="space-y-4">
                {renderExercise('2_1', 'https://www.youtube.com/watch?v=eGo4IYlbE5g')}
                {renderExercise('2_2', 'https://www.youtube.com/watch?v=vT2GjY_Umpw')}
                {renderExercise('2_3', 'https://www.youtube.com/watch?v=GZbfZ033f74')}
                {renderExercise('2_4', 'https://www.youtube.com/watch?v=eIq5CB9JfKE')}
                {renderExercise('2_5', 'https://www.youtube.com/watch?v=kwG2ipFRgfo')}
                {renderExercise('2_6', 'https://www.youtube.com/watch?v=soxrZlIl35U')}
                {renderExercise('2_7', 'https://www.youtube.com/watch?v=zC3nLHvflsk')}
            </div>
        ),
        day3: (
            <div className="space-y-4">
                {renderExercise('3_1', 'https://www.youtube.com/watch?v=IZxysoFfTpo')}
                {renderExercise('3_2', 'https://www.youtube.com/watch?v=2p5_vEgJgAA')}
                {renderExercise('3_3', 'https://www.youtube.com/watch?v=YyvSfVjQeL0')}
                {renderExercise('3_4', 'https://www.youtube.com/watch?v=F488k67BT_0')}
                {renderExercise('3_5', 'https://www.youtube.com/watch?v=Jfl_g_284eA')}
                {renderExercise('3_6', 'https://www.youtube.com/watch?v=VmB1G1K7v94')}
                {renderExercise('3_7', 'https://www.youtube.com/watch?v=pYcpY20QaE8')}
                {renderExercise('3_8', 'https://www.youtube.com/watch?v=6Z15_WdXmVw')}
            </div>
        ),
    };


    return (
        <div className="w-full h-screen flex flex-col bg-stone-50 text-stone-800">
            <header className="flex-shrink-0 p-4 bg-slate-900/80 backdrop-blur-sm flex justify-between items-center border-b border-slate-700 sticky top-0 z-10">
                <h1 className="text-lg font-bold text-cyan-300">Тренування Констянтина</h1>
                <button
                    onClick={onBack}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-4 rounded-full text-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                    Назад
                </button>
            </header>
            <main className="flex-grow overflow-y-auto">
                <div className="container mx-auto p-4 md:p-8 max-w-7xl">
                    <header className="text-center mb-8 relative">
                        <div className="absolute top-0 right-0 flex gap-2">
                           <LangButton targetLang="en" label="EN" />
                           <LangButton targetLang="ua" label="UA" />
                        </div>
                        <h1 className="pt-12 text-4xl md:text-5xl font-bold text-teal-800">{t.mainTitle}</h1>
                        <p className="text-stone-600 mt-2 text-lg">{t.subTitle}</p>
                    </header>
                    
                    <section className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                        <details>
                            <summary className="cursor-pointer text-xl font-semibold text-teal-700 hover:text-teal-800 transition-colors">
                                <span className="details-marker"></span>{t.principlesTitle}
                            </summary>
                            <div className="mt-4 pl-6 border-l-2 border-teal-200 space-y-4 text-stone-700">
                                <p>{t.principlesIntro}</p>
                                <div><h3 className="font-semibold text-stone-800">{t.progressiveOverload}</h3><p>{t.progressiveOverloadDesc}</p></div>
                                <div><h3 className="font-semibold text-stone-800">{t.mindMuscle}</h3><p>{t.mindMuscleDesc}</p></div>
                                <div><h3 className="font-semibold text-stone-800">{t.properForm}</h3><p>{t.properFormDesc}</p></div>
                                <div><h3 className="font-semibold text-stone-800">{t.restNutrition}</h3><p>{t.restNutritionDesc}</p></div>
                                <div><h3 className="font-semibold text-stone-800">{t.supplements}</h3><p>{t.supplementsIntro}</p>
                                    <div className="mt-2 pl-4 border-l-2 border-stone-200">
                                        <h4 className="font-semibold text-stone-700">{t.creatine}</h4>
                                        <p className="mt-1">{t.creatineDesc}</p>
                                        <p className="mt-1"><strong>{t.dosage}</strong> <span>{t.dosageDesc}</span></p>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </section>

                    <nav className="flex justify-center gap-2 md:gap-4 mb-8">
                       <DayButton day="day1" label={t.day1Btn} />
                       <DayButton day="day2" label={t.day2Btn} />
                       <DayButton day="day3" label={t.day3Btn} />
                    </nav>

                    <div id="workout-content">
                        <div className="p-4 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg mb-6">
                            {/* FIX: Cast to string to resolve TypeScript error where the dynamic key could resolve to an object. */}
                            <h2 className="text-2xl font-bold text-teal-800">{t[`${activeDay}Title` as keyof typeof t] as string}</h2>
                            {/* FIX: Cast to string to resolve TypeScript error where the dynamic key could resolve to an object. */}
                            <p className="text-stone-700 mt-1">{t[`${activeDay}Desc` as keyof typeof t] as string}</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {workoutContent[activeDay]}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-center items-center">
                                <h3 className="text-xl font-semibold mb-4 text-center">{t.chartTitle}</h3>
                                <div className="relative m-auto h-[320px] w-full max-w-[320px] md:h-[384px] md:max-w-[384px]">
                                    <canvas ref={canvasRef}></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default KostyaScreen;
