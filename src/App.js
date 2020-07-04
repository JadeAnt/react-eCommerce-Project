import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Switch } from "react-router-dom";


//Components
import {NavigationBar} from './components/Navbar.js';
import ShoppingCart from './components/Cart';
import ProductList from "./components/ProductList.js";
import ProductDetails from "./components/ProductDetails.js";
import Hero from "./components/Hero.js";
import Modal from "./components/Modal.js";
import Default from "./components/Default.js";

function App() {
  return (
    <div className = "">
      <React.Fragment>
        
        <NavigationBar />
          <Switch>
            <Route exact path = "/" render = { props =>
              <div>
                <Hero/>
                <ProductList/>
              </div> 
            }/>


            <Route path = "/details" component = {ProductDetails}/>
            <Route path = "/cart" component = {ShoppingCart}/>
            <Route component = {Default}/>
          </Switch>

          <Modal/>
      </React.Fragment>
    </div>
  );
}

export default App;
