import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
export default function HeaderRewards() {
  return (
    <div className="header"> 
    <Container >
      <Row>
        <Col>
          <div class="d-flex justify-content-center w-100">
            <a href="/">
              <img
                src="/images/yamyam.png"
                style={{
                  width: "80px",
                  height: "80px",
                  justifyContent: "center",
                }}
                alt="logo"
              />
            </a>
            <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
              Join YAMYAM Rewards
            </h3>
            <div class="d-flex mt-3" style={{ fontSize: "20px" }}>
              <a href="#" style={{ marginRight: "20px" }}>
                {" "}
                <Button variant="dark" className="button">
                  {" "}
                  Create Account
                </Button>{" "}
              </a>

              <span> OR </span>

              <a href="#" style={{ marginLeft: "20px", color: "black" }}>
                SIGN UP
              </a>
            </div>
          </div>
        </Col>
      </Row>
      
    </Container>
    <hr />
    </div>
  );
}
