import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero/Hero';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection/>
        <Features/>
    </div>
  )
}

export default App
