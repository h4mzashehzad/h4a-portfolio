import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './components/ui/tubelight-navbar'
import { Home, User, Briefcase, Mail } from 'lucide-react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Navigation */}
      <NavBar 
        items={[
          { name: 'Home', url: '#home', icon: Home },
          { name: 'About', url: '#about', icon: User },
          { name: 'Projects', url: '#projects', icon: Briefcase },
          { name: 'Contact', url: '#contact', icon: Mail }
        ]}
      />
      
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        {/* Content moved to main */}
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://vite.dev" target="_blank" className="group">
              <img 
                src={viteLogo} 
                className="h-16 w-16 transition-transform group-hover:scale-110" 
                alt="Vite logo" 
              />
            </a>
            <a href="https://react.dev" target="_blank" className="group">
              <img 
                src={reactLogo} 
                className="h-16 w-16 transition-transform group-hover:scale-110 animate-spin" 
                alt="React logo" 
              />
            </a>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bebas font-bold text-text-primary mb-6">
            Vite + React
            <span className="block text-blue-400">
              + Tailwind CSS
            </span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto font-nunito">
            A modern development stack with lightning-fast HMR, component-based architecture, 
            and utility-first CSS framework.
          </p>

          {/* Interactive Counter Card */}
          <div className="bg-slate-300/20 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-slate-300/30">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-400 hover:bg-cyan-400 text-background-primary font-nunito font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Count is {count}
            </button>
            <p className="text-text-secondary mt-4 font-nunito">
              Edit <code className="bg-slate-300/30 px-2 py-1 rounded text-blue-400">src/App.tsx</code> and save to test HMR
            </p>
          </div>

          <p className="text-text-secondary mt-8 font-nunito">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-300/10 backdrop-blur-sm rounded-xl p-6 border border-slate-300/20">
            <h3 className="text-xl font-bebas font-semibold text-text-primary mb-3">⚡ Lightning Fast</h3>
            <p className="text-text-secondary font-nunito">Vite's instant server start and lightning-fast HMR for the best development experience.</p>
          </div>
          <div className="bg-slate-300/10 backdrop-blur-sm rounded-xl p-6 border border-slate-300/20">
            <h3 className="text-xl font-bebas font-semibold text-text-primary mb-3">🎨 Utility-First CSS</h3>
            <p className="text-text-secondary font-nunito">Tailwind CSS provides low-level utility classes to build custom designs rapidly.</p>
          </div>
          <div className="bg-slate-300/10 backdrop-blur-sm rounded-xl p-6 border border-slate-300/20">
            <h3 className="text-xl font-bebas font-semibold text-text-primary mb-3">⚛️ Modern React</h3>
            <p className="text-text-secondary font-nunito">Built with React 19 and TypeScript for type-safe, component-based development.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
