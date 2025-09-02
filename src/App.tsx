import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
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
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Vite + React
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              + Tailwind CSS
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A modern development stack with lightning-fast HMR, component-based architecture, 
            and utility-first CSS framework.
          </p>

          {/* Interactive Counter Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-white/20">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Count is {count}
            </button>
            <p className="text-gray-300 mt-4">
              Edit <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">src/App.tsx</code> and save to test HMR
            </p>
          </div>

          <p className="text-gray-400 mt-8">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">⚡ Lightning Fast</h3>
            <p className="text-gray-300">Vite's instant server start and lightning-fast HMR for the best development experience.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">🎨 Utility-First CSS</h3>
            <p className="text-gray-300">Tailwind CSS provides low-level utility classes to build custom designs rapidly.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">⚛️ Modern React</h3>
            <p className="text-gray-300">Built with React 19 and TypeScript for type-safe, component-based development.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
