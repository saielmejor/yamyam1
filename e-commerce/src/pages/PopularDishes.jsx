import React from "react";
import { Card } from "react-bootstrap";

export default function PopularDishes() {
  return (
    <div id="popular dishes" style={{ backgroundColor: "#E5DB7C" }}>
      <div class="container d-flex justify-content-center ">
        <div class="row mt-5 ">
          <h1>Popular Dishes</h1>
        </div>
      </div>
      <div class="container d-flex justify-content-center">
        <div class="row m-5">
          <div class="col-sm mx-3 ">
          <img className="popular-image" src="/images/pabellon-popular.png" alt="pabellon" />
          <div className="popular-food-dish"> <h4>Fan Favorite Pabellon</h4></div>
          </div>
          <div class="col-sm mx-3 ">
          <img className="popular-image" src="/images/arepa-popular.png" alt="arepa" />
          <div className="popular-food-dish"> <h4>Fan Favorite Arepas</h4></div>
          </div>
          <div class="col-sm mx-3 ">
          <img className="popular-image" src="/images/cachapas.jpeg" alt="cachapas" />
          <div className="popular-food-dish"> <h4>Fan Favorite Cachapas</h4></div>
          </div>
        </div>
      </div>
    </div>
  );
}
