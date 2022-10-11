import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from './components/Card'
import data from "./data"

function App() {
  const [count, setCount] = useState(0)
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})  

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
