import React from "react";
import { Component } from "react";
import Navbar from "./navbar";
import Card from "./card";

import "../App.css";

class Homepage extends Component {
  render() {
    return (
      <div>
   <Navbar/>
   <br/>
   <h1><span class="badge bg-secondary">Recent Movies</span></h1>
   <br/>
   <div className="row row-cols-1 row-cols-md-5 g-4">
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
      </div>
      <br/>
   <h1><span class="badge bg-secondary">Recommended Movies</span></h1>
   <br/>
   <div className="row row-cols-1 row-cols-md-5 g-4">
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
      </div>
      </div>
    );
  }
}

export default Homepage;