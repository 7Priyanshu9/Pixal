import {useState} from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './assets/Components/Slider'
import SideBarItems from './assets/Components/SideBarItems'
import Editor from './assets/Components/Editor'
import Hero from './assets/Components/Hero'
import Navbar from './assets/Components/Navbar'


function App() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <Editor/>
    </>
  )
  }
  
export default App;
