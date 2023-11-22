import React from "react";

import data from "../data";
export default function Advertisement() {
const {products}=data
  return (
    <div id="advertisement"> 
    <div class="container d-flex justify-content-center ">
      
        <div class="row m-5">
          <div class="col-sm mx-5 ">
          <div class="container border border-primary "><img className="popular-image" src="/images/cater.png" alt="pabellon" />
          <div className="popular-food-dish"> <h4>Fan Favorite Pabellon</h4></div> </div>
          
          </div>
          <div class="col-sm mx-5 ">
          <img className="popular-image" src="/images/cachapa-fresh.png" alt="arepa" />
          <div className="popular-food-dish"> <h4>Fan Favorite Arepas</h4></div>
          </div>
        
        </div>
      </div>
      
    

    </div>
  );
}
