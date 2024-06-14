import React from "react";
import { Component } from "react";
import "login.jsx";
import "signup.jsx";
import "navbar.jsx";
import "../App.css";
import Login from "./login";
import Signup from "./signup";
import App from "../App";
import { BrowserRouter as Router, Routes, Route, Link } from 'react'
class Home extends Component{

    render(){
        <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          
        </Switch>
      </Router>

    }
}