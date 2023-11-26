import React from "react";
import Button from "react-bootstrap/Button";

export default function Catering() {
  return (
    <div id="catering">
      <div class="container d-flex justify-content-center ">
        <div class="row m-5">
          <div class="col-sm mx-5 ">
            <div class="container border border-dark px-0">
              <img
                className="ad-image"
                src="/images/catering.png"
                alt="catering"
              />
              <div className="popular-food-dish mt-2">
                {" "}
                <h4>YAMYAM CATERING </h4>
              </div>{" "}
              <div class="d-flex justify-content-center">
                <h6>EVENTS SMALL TO HUGE. Requires 24 hours notice.</h6>
              </div>
              <div class="text-center my-3">
                <button type="button" class="btn btn-custom" className=".button">
                  START YOUR ORDER
                </button>
              </div>
            </div>
          </div>
          <div class=" col-sm mx-5 ">
            <div class="container border border-dark px-0  ">
              {" "}
              <img
                className="ad-image"
                src="/images/cachapa-fresh.png"
                alt="arepa"
              />
              <div className="popular-food-dish mt-2">
                {" "}
                <h4>GROUP ORDER</h4>
              </div>
              <div class="d-flex justify-content-center">
                <h6>EVENTS SMALL TO HUGE. Requires 24 hours notice.</h6>
              </div>
              <div class="text-center my-3">
                <button type="button" class="btn btn-custom" className=".button">
                  START YOUR ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
