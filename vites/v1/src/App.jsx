import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          {/* Logo Stack */}
          <div className="relative mb-8">
            <div className="relative inline-block">
              <img
                src={heroImg}
                className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-90"
                alt=""
              />
              <img
                src={reactLogo}
                className="absolute -top-4 -right-8 w-12 h-12 md:w-16 md:h-16 animate-spin-slow"
                alt="React logo"
              />
              <img
                src={viteLogo}
                className="absolute -bottom-4 -left-8 w-12 h-12 md:w-16 md:h-16 animate-bounce-slow"
                alt="Vite logo"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Smell Panty
          </h1>

          <p className="text-slate-300 text-lg mb-8 max-w-2xl">
            Edit{' '}
            <code className="bg-slate-700 px-2 py-1 rounded-md text-purple-300">
              src/App.jsx
            </code>
            and save to test{' '}
            <code className="bg-slate-700 px-2 py-1 rounded-md text-purple-300">
              HMR
            </code>
          </p>

          {/* Counter Button */}
          <button
            type="button"
            onClick={() => setCount((count) => count + 1)}
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <span className="relative z-10">Count is {count}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>
        </div>

        <div className="border-t border-slate-700 my-12"></div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Documentation Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-8 h-8 text-purple-400"
                role="presentation"
                aria-hidden="true">
                <use href="/icons.svg#documentation-icon"></use>
              </svg>
              <h2 className="text-2xl font-bold text-white">Documentation</h2>
            </div>
            <p className="text-slate-400 mb-6">Your questions, answered</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://vite.dev/"
                  target="_blank"
                  className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors">
                  <img className="w-6 h-6" src={viteLogo} alt="" />
                  <span>Explore Vite</span>
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors">
                  <img className="w-6 h-6" src={reactLogo} alt="" />
                  <span>Learn React</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-8 h-8 text-purple-400"
                role="presentation"
                aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
              <h2 className="text-2xl font-bold text-white">Connect with us</h2>
            </div>
            <p className="text-slate-400 mb-6">Join the Vite community</p>
            <ul className="grid grid-cols-2 gap-3">
              <li>
                <a
                  href="https://github.com/vitejs/vite"
                  target="_blank"
                  className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    role="presentation"
                    aria-hidden="true">
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://chat.vite.dev/"
                  target="_blank"
                  className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    role="presentation"
                    aria-hidden="true">
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/vite_js"
                  target="_blank"
                  className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    role="presentation"
                    aria-hidden="true">
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/vite.dev"
                  target="_blank"
                  className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    role="presentation"
                    aria-hidden="true">
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
