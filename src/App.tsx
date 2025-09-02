import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PillNav from './components/PillNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with PillNav */}
      <header className="container mx-auto px-6 py-8">
        <PillNav
          items={[
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' }
          ]}
          baseColor="#fff"
          pillColor="#06b6d4"
          hoveredPillTextColor="#0f172a"
          className="font-nunito"
        />
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
          
          <h1 className="text-5xl md:text-7xl font-bebas font-bold text-gray-300 mb-6">
            Vite + React
            <span className="block text-blue-400">
              + Tailwind CSS
            </span>
          </h1>
          
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto font-nunito">
            A modern development stack with lightning-fast HMR, component-based architecture, 
            and utility-first CSS framework.
          </p>

          {/* Interactive Counter Card */}
          <div className="bg-gray-500/10 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-gray-500/20">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-400 hover:bg-cyan-400 text-slate-900 font-nunito font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Count is {count}
            </button>
            <p className="text-gray-500 mt-4 font-nunito">
              Edit <code className="bg-gray-500/20 px-2 py-1 rounded text-blue-400">src/App.tsx</code> and save to test HMR
            </p>
          </div>

          <p className="text-gray-500 mt-8 font-nunito">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-500/5 backdrop-blur-sm rounded-xl p-6 border border-gray-500/10">
            <h3 className="text-xl font-bebas font-semibold text-gray-300 mb-3">⚡ Lightning Fast</h3>
            <p className="text-gray-500 font-nunito">Vite's instant server start and lightning-fast HMR for the best development experience.</p>
          </div>
          <div className="bg-gray-500/5 backdrop-blur-sm rounded-xl p-6 border border-gray-500/10">
            <h3 className="text-xl font-bebas font-semibold text-gray-300 mb-3">🎨 Utility-First CSS</h3>
            <p className="text-gray-500 font-nunito">Tailwind CSS provides low-level utility classes to build custom designs rapidly.</p>
          </div>
          <div className="bg-gray-500/5 backdrop-blur-sm rounded-xl p-6 border border-gray-500/10">
            <h3 className="text-xl font-bebas font-semibold text-gray-300 mb-3">⚛️ Modern React</h3>
            <p className="text-gray-500 font-nunito">Built with React 19 and TypeScript for type-safe, component-based development.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
