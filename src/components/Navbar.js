import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styles = styled.div`
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" bg = "dark" variant = "dark">
      <Navbar.Brand> 
        <Link to = "/" style={{ textDecoration: 'none' }}>
          <img 
            src = "img/headmelogo.png"
            width ="35"
            height = "35"
            className = "d-inline-block align-top image-fluid"
            alt = "Logo"
          />
          
          Head Me

        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/*
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link><Link to ="/products" style={{ textDecoration: 'none'}}>Products</Link></Nav.Link></Nav.Item> 
          
          <Nav.Item><Nav.Link><Link to ="/cart" style={{ textDecoration: 'none' }}><i className = "fa fa-shopping-cart fa-2x"/></Link></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);