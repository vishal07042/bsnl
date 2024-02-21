import { useState } from 'react'

import './App.css'
import Navvbar from './components/Navvbar'

import MuiCarsol from './components/MuiCarsol'

import Cardd from './components/Card'
import Caards from './components/Card'
import ChakraCard from './components/ChakraCard'
import NavTwo from './components/NavTwo'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Navvbar />

 <MuiCarsol />

  
  {/* <Caards /> */}
  {/* <ChakraCard  /> */}
  <Caards />
  <NavTwo />
  {/* <MuiCarsol /> */}

  <MuiCarsol />
  <Footer />
   </div>
  )
}

export default App
