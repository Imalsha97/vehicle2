import React from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import "./Login2.css";
import LoginImage from "./../../img/Log1.jpg";
import { autoType } from "d3";

const Login2 = () => {
  return (
    <>
      {/* display: flex;
align-items: center;
justify-content: center;
width: 100%; // make sure the parent is full screen 
height: 100%; // so that the content will center correctly */}
      <Container
        fluid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(to bottom, #0a1930, #2f4d5b, #698485, #aebcb6, #f6f8f3)",
        }}
      >
        <Card
          style={{
            width: "70%",
            height: "66vh",
            padding: "10px",
            borderRadius: "50px",
            marginBottom: "100px",
             
          }}
          className="mt-5 "
          body
        >
          <Row>
            <Col lg={4} sm={12} className=" mt-5 p-5">
              <div style={{ display: "flex", justifyContent: "center",color: "#44616a" }}>
                <FaRegUserCircle size={35} />
                
              </div>
             
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{fontSize:'13px'}}>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"style={{fontSize:'13px'}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{fontSize:'13px'}}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" style={{fontSize:'13px'}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary btn-block" type="submit" size="lg" style={{width:'100%'}}>
                  Login
                </Button >
                <div className="text-center mt-3">
                  <a href="">
                    <small className="reset" style={{fontSize:'13px',textAlign:'right'}}>password reset </small>
                  </a>
                 
                </div>
              </Form>
            </Col>
            <Col lg={8} sm={12} style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"}}>
              <img  fluid className="w-100 card-img-top embed-responsive-item" src={LoginImage} alt=""  style={{
              objectFit: 'cover',
              borderRadius: 55,
              width: '50vw',
              height: '100%',
             
              
            }} />
            </Col>
          </Row>
        </Card>
      </Container>

      
    </>
  );
};

export default Login2;
