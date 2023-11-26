import React from "react";

import data from "../data";
export default function Advertisement() {

  return (
    <div id="advertisement">
      <div class="container d-flex justify-content-center ">
        <div class="row m-5">
          <div class="col-sm mx-5 ">
            <div class="container border border-dark px-0">
              <img
                className="ad-image"
                src="/images/cater.png"
                alt="pabellon"
              />
              <div className="popular-food-dish mt-2">
                {" "}
                <h4>CATER AT YOUR PLACE OR WORK PLACE </h4>
              
              </div>{" "}
              <p>Make your Party /Work Place Extra. Make your own dish with real ingredients.  Easy to order and customization, and always fresh.</p>
            </div>
          </div>
          <div class="col-sm mx-5 ">
            <div class="container border border-dark px-0 ">
              {" "}
              <img
                className="ad-image"
                src="/images/cachapa-fresh.png"
                alt="arepa"
              />
              <div className="popular-food-dish mt-2">
                {" "}
                <h4>MADE FROM FRESH INGREDIENTS</h4> 
              </div>
              <p>Sign up for delicious rewards with the YAMYAM rewards. Earn points toward free meals just by ordering for pickup or delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
