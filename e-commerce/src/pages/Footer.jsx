import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div id="footer">
      <Container className="customContainer">
        <Row >
          <Col>
            <Row style={{fontWeight:"bold"}}> OUR COMPANY </Row>
            <Row> About us </Row>
            <Row> News </Row>
            <Row> Investor Relations </Row>
            <Row> Sustainability </Row>
          </Col>
          <Col>
            <Row style={{fontWeight:"bold"}} >  OUR FOOD </Row>
            <Row> catering </Row>
            <Row> gifting </Row>
            <Row> nutritional information </Row>
            <Row> locations </Row>
          </Col>
          <Col>
            <Row style={{fontWeight:"bold"}} > OUR SUPPORT </Row>
            <Row> contact support </Row>
          </Col>
          <Col>
            <Row style={{fontWeight:"bold"}} > Legal</Row>
            <Row>Privacy Policy</Row>
            <Row>Terms of Use</Row>
            <Row>Your Privacy choices </Row>
          </Col>
          <Col>
            <Row style={{fontWeight:"bold"}}> SOCIAL </Row>
            <Row> <span><a href="/" style={{textDecoration:"none"}}> <FacebookIcon></FacebookIcon></a> <a href="/"  style={{textDecoration:"none"}}> <InstagramIcon></InstagramIcon></a> </span>  </Row>
          </Col>  
        </Row>{" "}
        
      </Container>
    </div>
  );
}
