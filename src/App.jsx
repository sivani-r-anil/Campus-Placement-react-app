import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegiststration from './components/AddRegiststration'
import SearchRegistration from './components/SearchRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddRegiststration/>
      <SearchRegistration/>
    </>
  )
}

export default App
