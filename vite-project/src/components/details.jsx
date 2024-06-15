import React from "react";
import { Component } from "react";
import "../App.css";

class Details extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/R.895432a92500bc7d6db33662130e0366?rik=AXuIzQBuKWWaqg&pid=ImgRaw&r=0" class="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/PgIzZvhqy80/maxresdefault.jpg" class="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://logodix.com/logo/816859.png" class="d-block w-50" alt="..."/>
    </div>
  </div>
</div>
            </div>
        );
    }
}

export default Details;