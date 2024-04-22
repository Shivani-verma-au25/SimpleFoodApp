import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Ingrident from './components/Ingrident'
import HomeCard from './components/HomeCard'
import Card from './components/Card'


function App() {
  return (
    <div className='w-full h-screen bg-black '>
      {/* routes */}
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ingredint' element={<Ingrident />} />
        <Route path='/homepic' element={<HomeCard />} />
        <Route path='/:idCategory' element={<Card />} />
        
       </Routes>
    </div>
  )
}

export default App