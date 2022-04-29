import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id,image,rating,price,title}){
    const [,dispatch]=useStateValue();
    const RemoveFromBasket =()=>{
        dispatch({
            type:'REMOVE-FROM-BASKET',
            id:id
        })
    }
    return(
         <div className="checkoutproduct">
           <img className="checkoutproduct-image"
           src={image} alt="content-logo"/>

           <div className="checkoutproduct-info">
               <p className="checkoutproduct-title">{title}</p>
               <p className="checkoutproduct-price">
                   <small>$</small>
                   <strong>{price}</strong>
               </p>
               <div className="checkoutproduct-rating">
                {Array(rating)
                .fill()
                .map(()=>(
                    <p>*</p>
                ))}
             </div>
             <button onClick={RemoveFromBasket}> Remove from basket </button>
           </div>
         </div>
    )
}
export default CheckoutProduct