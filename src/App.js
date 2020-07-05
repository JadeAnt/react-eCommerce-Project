import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Switch } from "react-router-dom";


//Components
import {NavigationBar} from './components/Navbar.js';
import ShoppingCart from './components/Cart/ShoppingCart.js';
import Hero from './components/Hero.js'
import ProductList from "./components/ProductList.js";
import ProductDetails from "./components/ProductDetails.js";
import Modal from "./components/Modal.js";
import Default from "./components/Default.js";

class App extends Component{
  render(){
  return (
      <React.Fragment>
        
        <NavigationBar />
          <Switch>
            <Route exact path = "/" component = {Hero}/>
            <Route path = "/products" component = {ProductList}/>
            <Route path = "/details" component = {ProductDetails}/>
            <Route path = "/cart" component = {ShoppingCart}/>
            <Route component = {Default}/>
          </Switch>

          <Modal/>
      </React.Fragment>
  );}
}

export default App;
