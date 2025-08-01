import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-screen-md mx-auto p-4">
        <div className="text-xl text-pink-500 font-bold">
          Hello Tailwind 🎀
        </div>
      </main>
    </div>
  )
}

export default App
