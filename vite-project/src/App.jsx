import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react'
import './App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login'
import Signup from './components/signup'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import Details from './components/details'

function App() {

  return (
    <>
     <Navbar/>
    < br/> 
    < br/>
 
    {/* for every page you need to uncomment it's section and comment the other sections*/}
    {/* I have been trying to redirect between pages using React-routing,It's still not working for me. */}
  


    {/* 1-login */}


    {/* <div className='my'>       
    <br/>
    <div className="card mb-3 "style={{ minWidth:"40vh" }}>
  <Login/>      
      </div> 
      </div> */}


    {/* 2-signup */}


{/* 
       <div className='my'>
    <br/>
    <div className="card mb-3 "style={{ minWidth:"40vh" }}>
      <Signup/>
    </div> 
    </div>  */}



    {/* 3-homepage */}
  


      {/* <Homepage/> */}





    {/* 4-details */}
      


      {/* <Details/> */}
      </>
  )
}

export default App


// This is an unfinished project, I'll work on redirecting between pages and completing the details' page and the favourites' page.

