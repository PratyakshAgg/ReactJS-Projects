import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Interests from "./components/Interests"
import Header from "./components/Header"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
