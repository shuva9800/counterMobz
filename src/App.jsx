import { useState } from 'react'

import './App.css'
import CounterApp from './components/CounterApp'
import SearchFilter from './components/SearchFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <CounterApp/>
      <SearchFilter/>
   </div>
  )
}

export default App
