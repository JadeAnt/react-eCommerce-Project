import React  from "react";
import '../../App.css';

export default function CartItem({item,value}){
    
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    
    return(
        <div className = "row my-1 text-capitalize text-center">
            
            {/*Image*/}
            <div className = "col-10 mx-auto col-lg-2">
                <img 
                    src = {img} 
                    style = {{width: '5rem', height:'5rem'}} 
                    className = "image-fluid" 
                    alt = "product"
                />
            </div>
            
            {/*Name*/}
            <div className = "col-10 mx-auto col-lg-2">
                <span className = "d-dg-none"> product: </span>
                {title}
            </div>

            {/*Price*/}
            <div className = "col-10 mx-auto col-lg-2">
                <span className = "d-dg-none">price: $</span>
                {price}
            </div>

            {/*Quantity Buttons*/}
            <div className = "col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className = "d=flex justify-content-center">
                    <div>
                        <span className = "btn btn-black mx-1" onClick = {() => increment(id)}> + </span>
                        <span className = "btn btn-black mx-1" > {count} </span>
                        <span className = "btn btn-black mx-1" onClick = {() => decrement(id)}> - </span>
                    </div>
                </div>

            </div>

            {/*Remove*/}
            <div className = "col-10 mx-auto col-lg-2">
                <div className = "cart-icon" onClick = {() => removeItem(id)}>
                    <i className = "fa fa-trash fa-2x"></i>
                </div>
            </div>

            {/*Total*/}
            <div className = "col-10 mx-auto col-lg-2">
                <strong>item total: $ {total} </strong>
            </div>

            

        </div>
    );
}