import { useState } from 'react'
import Home from './Components/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './Components/Layout'
import SingleDoctorPage from './Components/SingleDoctorPage'
import Appointment from './Components/Appointment'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<Layout/>}>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' index element={<Home/>}/>
      <Route path="/doctor/:id" element={<SingleDoctorPage />} />  
      <Route path="/appointment/:id" element={<Appointment />} />    
      <Route path='/'  element={<Signup/>}/>
      <Route path='/'  element={<Login/>}/>
      
      <Route path='/login' element={<Login/>}/>
     </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
