import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product.js';
import Title from './Title.js';
import {storeProducts, detailProduct} from '../Data.js';
import {ProductConsumer} from '../context.js';

export default class ProductList extends React.Component{
    state = {
        products: storeProducts,
    }
    
    render(){

        console.log(this.state.products);

        return(
            <React.Fragment>
                <div className = "py-5">
                    <div className = "container">

                        <Title name = "Our" title = " Products" />

                        <div className = "row">
                            <ProductConsumer>
                                {(value)=>{
                                    return value.products.map(product => {
                                        return <Product key = {product.id} product = {product}/>;
                                    })
                                }}
                            </ProductConsumer>
                        </div> 

                    </div>
                </div>
            </React.Fragment>
        );
    }
}