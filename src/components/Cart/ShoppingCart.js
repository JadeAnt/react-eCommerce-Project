import React from 'react';
import Title from '../Title.js';

//Components
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context.js';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class ShoppingCart extends React.Component{
    render(){
        return(
            <section>

                <ProductConsumer>
                    {
                        value => {
                            const {cart} = value;
                            if(cart.length > 0){
                                return (
                                    <React.Fragment>
                                        <Title name = "your " title = "cart"/>
                                        <CartColumns/>
                                        <CartList value = {value} />
                                        <CartTotals value = {value} history = {this.props.history}/>
                                    </React.Fragment>
                                );
                            }
                            else{
                                return <EmptyCart/>;
                                
                            }
                        }
                    }
                </ProductConsumer>
                
            </section>
        );
    }
}