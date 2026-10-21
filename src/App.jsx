import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
