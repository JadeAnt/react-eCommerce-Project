import React from 'react';
import {ProductConsumer} from '../context.js';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../components/Button.js';


export default class ProductDetails extends React.Component{
    render(){
        return(
            <ProductConsumer>
                {(value) =>{
                    const {id, company, img, price, title, info, inCart} = value.detailProduct;
                    return(
                        <div className = "container py-5">
                            
                            {/*title*/}
                            <div className = "row">
                                <div className = "col-10 mx-auto text-center text-slanted  my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/*Product Image & Info */}
                            <div className = "row">
                                <div className = "col-10 mx-auto col-md-6 my-3">
                                    <img src = {img} className = "img-fluid" alt = "product"/>
                                </div>

                                <div className = "col-10 mx-auto col-md-6 my-3 text-capitalize ">
                                    <h2>model: {title}</h2>

                                    <h4 className = "text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className = "text-uppercase">{company}</span>
                                    </h4>

                                    <h4 className = "">
                                        <strong>
                                            price: <span>$</span> {price}
                                        </strong>
                                    </h4>

                                    <p className = "text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about about product: 
                                    </p>

                                    <p className = "text-muted lead">
                                        {info}
                                    </p>

                                    {/*buttons*/}
                                    <Link to = '/'>
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>

                                    <ButtonContainer 
                                    cart
                                    disabled = {inCart ? true:false} 
                                    onClick = {() =>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        
                                        {inCart? 'inCart': 'Add to Cart'}

                                    </ButtonContainer>


                                </div>
                                
                            </div>

                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}