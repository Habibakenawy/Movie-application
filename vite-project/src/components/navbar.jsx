import React from "react";
import { Component } from "react";
import { useState } from "react";
import "../App.css";
import Signup from "./signup";
import Login from "./login";
class Navbar extends Component {
    render() {
        return (     
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Movie Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" onClick={Signup}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Signup</a>
                            </li>
                        </ul>
                        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
                    </div>
                </div>
            </nav>
   
        );
    }
}

export default Navbar;