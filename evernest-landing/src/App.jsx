import React from 'react'
import EvernestHero from './components/EvernestHero'
import EffortlessSection from './components/EffortlessSection.jsx'
import HowItWorks from './components/HowItWorks.jsx';
import ImpactSection from './components/ImpactSection.jsx';
import LastSection from './components/LastSection.jsx';

import './App.css'

function App() {
  return (
    <div className="App">
      <EvernestHero />
      <EffortlessSection />
      <HowItWorks />
      <ImpactSection />
      <LastSection />
    </div>
  )
}

export default App