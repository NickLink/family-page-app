import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import HrtScreen from './components/HrtScreen';
import WorkoutApp from './WorkoutApp';
import PillsScreen from './components/PillsScreen';
import RoutineScreen from './components/RoutineScreen';
import KostyaScreen from './components/KostyaScreen';
import HealthScreen from './components/HealthScreen';
import LeisureScreen from './components/LeisureScreen';
import CocktailsScreen from './components/CocktailsScreen';

type View = 'landing' | 'health' | 'leisure' | 'hrt' | 'workout' | 'pills' | 'routine' | 'kostya' | 'cocktails';

export default function App() {
  const [view, setView] = useState<View>('landing');

  const handleNavigateToHealth = () => setView('health');
  const handleNavigateToLeisure = () => setView('leisure');
  const handleNavigateToWorkout = () => setView('workout');
  const handleNavigateToHrt = () => setView('hrt');
  const handleNavigateToPills = () => setView('pills');
  const handleNavigateToRoutine = () => setView('routine');
  const handleNavigateToKostya = () => setView('kostya');
  const handleNavigateToCocktails = () => setView('cocktails');
  const handleNavigateBackToLanding = () => setView('landing');

  const renderContent = () => {
    switch (view) {
      case 'health':
        return <HealthScreen
          onNavigateToHrt={handleNavigateToHrt}
          onNavigateToWorkout={handleNavigateToWorkout}
          onNavigateToPills={handleNavigateToPills}
          onNavigateToRoutine={handleNavigateToRoutine}
          onNavigateToKostya={handleNavigateToKostya}
          onBack={handleNavigateBackToLanding}
        />;
      case 'leisure':
        return <LeisureScreen 
          onBack={handleNavigateBackToLanding} 
          onNavigateToCocktails={handleNavigateToCocktails}
        />;
      case 'workout':
        return <WorkoutApp onBack={handleNavigateToHealth} />;
      case 'hrt':
        return <HrtScreen onBack={handleNavigateToHealth} />;
      case 'pills':
        return <PillsScreen onBack={handleNavigateToHealth} />;
      case 'routine':
        return <RoutineScreen onBack={handleNavigateToHealth} />;
      case 'kostya':
        return <KostyaScreen onBack={handleNavigateToHealth} />;
      case 'cocktails':
        return <CocktailsScreen onBack={handleNavigateToLeisure} />;
      case 'landing':
      default:
        return <LandingScreen 
          onNavigateToHealth={handleNavigateToHealth}
          onNavigateToLeisure={handleNavigateToLeisure}
        />;
    }
  };

  const mainClasses = view === 'kostya'
    ? 'min-h-screen'
    : 'min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4';

  return (
    <main className={mainClasses}>
      {renderContent()}
    </main>
  );
}