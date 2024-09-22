// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Button } from './components/ui/button'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import CustomCursor from './custom/CustomCursor'

function App() {

  return (
    <>
    <CustomCursor/>
    <div style={{zIndex:"2"}} className=''>
    <Navbar />
    </div>
    
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:id" element={<ProjectDetails/>}/>
      </Routes>
    </>
  )
}

export default App
