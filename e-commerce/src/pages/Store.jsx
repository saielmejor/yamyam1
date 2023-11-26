import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product"; 
import data from "../data";
export default function Store() {
const {products}=data
  return (
    <div id="delivery">
      
      <div class="row row-cols-3 g-3 m-5 "> 
      {data.products.map((product) => (
        <Col  xs={8} md={4}  className="mb-3 ml-5 d-flex justify-content-center">
          <Product product={product}></Product>
        </Col>
        ))}
        
        
      </div>

    </div>
  );
}
