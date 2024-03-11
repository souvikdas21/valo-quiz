import { useState } from 'react'
import Background from './components/Background.jsx'
import Header from './components/Header.jsx'
import Game from './components/GamesCard.jsx'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Game/>
      <Background/>
    </>
  )
}

export default App
