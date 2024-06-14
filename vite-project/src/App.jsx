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
    <div>
    <div className="card mb-3 "style={{ minWidth:"40vh" }}>
      <img src="https://cdn3.iconfinder.com/data/icons/business-220/63/team-512.png" style={{width:"35%" }} className="card-img-top" alt="..." ></img>
      <div className="card-body">
        <h1 className="card-title">Meet our 2023 <i>IEEE</i>  team</h1>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
      </div>
      </div>
      </>
  )
}

export default App
