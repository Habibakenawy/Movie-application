import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react'
import './App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login'
import Signup from './components/signup'
import Navbar from './components/navbar'

function App() {

  return (
    <>
    <Navbar/>
    < br/> 
    < br/>
    <div className='my'>
    <br/>
    <div className="card mb-3 "style={{ minWidth:"40vh" }}>
    <Login/>
   
      </div>
      {/* <div className="card mb-3 "style={{ minWidth:"40vh" }}>
    <Signup/>
      </div> */}
      <br/>
      </div>
      </>
  )
}

export default App
