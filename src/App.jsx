import { BrowserRouter } from 'react-router-dom';

import {About, Contact, Credit, Experience, Feedbacks, Hero, Navbar, Works, BubblesCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 overflow-x-visible">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-gradient-to-b from-blue-600 to-slate-950 relative z-0">
          <About />
          <Experience />
          <Works />
          <Feedbacks />
          <Contact />
          <BubblesCanvas />
          <Credit />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
