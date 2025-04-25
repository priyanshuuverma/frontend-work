import React from 'react'
import Layout from './Component/Layout'
import "./App.css"
import Homepage from './Pages/Homepage'
import Diet from './Pages/Diet'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './Component/ScrollToTop'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Workout from './Pages/Workout'
import Gymwork from './Pages/Gymwork'
import Hwork from './Pages/Hwork'
import Chatbot from './Chatbot/Chatbot'
import Chat from './Chatbot/Chat'
const App = () => {
  return (
    <>
     <ScrollToTop/>
     {/* <Chat /> */}
   <Routes>
    
    <Route path='/' element={<Homepage/>}/>
    <Route path='/diet' element={<Diet/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/workout' element={<Workout/>}/>
    <Route path='/workout/Home-workout' element={<Hwork/>}/>
    <Route path='/workout/Gym-workout' element={<Gymwork/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes> 
    </>
   
  )
}

export default App