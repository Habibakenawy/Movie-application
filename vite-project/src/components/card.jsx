import React from "react";
import { Component } from "react";

class Card extends Component{

    render(){
        return(
            <div className="col">
            <div className="card bg-dark text-white border-light" style={{maxWidth: "18rem"}}>
  <img src="https://th.bing.com/th/id/OIP.05TJ_PrCemXimiwGcgJ8agHaJQ?rs=1&pid=ImgDetMain" class="card-img" alt="..."/>
  <a href="#" class="btn btn-light stretched-link">Go somewhere</a>
  <div className="card-img-overlay">
  
  </div>
</div>
</div>
        )
    }
}

export default Card;