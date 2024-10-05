// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Button } from './components/ui/button'
import Home from './pages/Home/Home'
// import Navbar from './pages/Navbar/Navbar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import CustomCursor from './pages/custom/CustomCursor'
import IssueDetails from './pages/IssueDetails/IssueDetails'
// import Login from './pages/Login/Login'
import PageNotFound from  "./pages/PageNotFound.jsx"
import Subscription from './pages/Subscription/Subscription.jsx'
// import Login from './pages/Auth/Login'
// import Signup from './pages/Auth/Signup'
import Auth from './pages/Auth/Auth'
// import Login from './pages/Auth/Login'
// import LandingPage from "../src/pages/custom/LandingPage"
function App() {

  return (
    <>  
      <CustomCursor/>
      {
      true?
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:id" element={<ProjectDetails/>}/>
        <Route path="project/:projectId/issue/:issueId" element={<IssueDetails/>}/>
        <Route path="/upgrade" element={<Subscription/>}/>
        <Route path="auth" element={<Auth/>}/>
        {/* <Route path="/signup" element={<Signup/>}/> */}
        <Route path="https://project-management-system-frontend-livid.vercel.app/*" element={<PageNotFound/>}/>
      </Routes>:
      <Auth/>
      // <Routes>
      //   <Route index element={<div className=''> <LandingPage /></div>}/>
      //   <Route path='/auth' element={<Auth/>}/>
      // </Routes>
      
      }
    </>
  )
}

export default App
