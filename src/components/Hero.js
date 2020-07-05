import React from 'react';
import ProductList from './ProductList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap'

export default function Hero(){
    
    return(
        <React.Fragment>
                <Jumbotron fluid style = {styles}>
                    <Style>
                        <Container className = "hero-text">
                            
                                <h1 className = "text-capitalize"> comfort and quality like you've never known</h1>
                                <p style = {{fontSize: "1.4rem"}}>
                                    View our new arrivals and featured products

                                </p>
                                <Link to ="/products">
                                    <button className = "btn btn-primary text-uppercase mb-3 px-5" type = "button"> 
                                        Shop Now
                                    </button>
                                </Link>
                        </Container>
                    </Style>
                </Jumbotron>
            <ProductList/>
        </React.Fragment>
    );
    
}

const styles = {

  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  backgroundImage:  ' linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("img/slide-1.jpg")',

  /* Set a specific height */
  height: '90vh',

  /* Position and center the image to scale nicely on all screens */
  backgroundPosition: ' center',
  backgroundRepeat: 'no-repeat',
  backgroundSize:' cover',
  position: 'relative',


};

const Style = styled.div`
    .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
`;