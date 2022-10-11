import { useState } from 'react'
import reactLogo from './assets/react.svg'
import data from "./data"
import Header from "./components/Header"
import Traveldata from "./components/Traveldata"

function App() {
  const [count, setCount] = useState(0)
  const traveldata = data.map(item => {
    return (
      <Traveldata 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="container">
      <Header />
      <div>
        {traveldata}
      </div>
    </div>
  )
}

export default App
