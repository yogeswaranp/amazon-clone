import React from "react";
import { useStateValue } from "./StateProvider";
import pc7 from './Image/pc7.jpg'
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal'

function Checkout(){
    const [{basket}]=useStateValue();
    return(
        <div className="checkout">
            <div className="checkout-left">
            <img className="chechout_ad"
            src={pc7}
            alt="ad-logo"/>

            {basket?.length === 0? (
                <div>
                    <h2>Your Shopping basket is Empty</h2>
                    <p>You have no item in your basket. To buy one or more item, click "ADD TO BASKET" next to the item</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout_title">Your Shopping basket</h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        rating={item.rating}
                        image={item.image}
                        />

                    ))}
                </div>
            )
            }
          </div>
          {basket.length >0 && (
              <div className="checkout-right">
                 
                   <Subtotal/> 
              </div>
          )}
        </div>
    )
}
export default Checkout;