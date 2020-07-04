import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #69DDFF; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #222;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #222;
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
    <Navbar expand="lg">
      <Navbar.Brand href="/">Clothing Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/*
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Products</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/cart"><i className = "fa fa-shopping-cart"/></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);