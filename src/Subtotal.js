
import React from "react";
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";


function Subtotal(){
     const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=> item.price+amount, 0);
    
    const [{basket}]=useStateValue();
    return(
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal({basket.length}items): <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox"/>This order contain a gift.
                </small>
                </>

            )}
            decimalScale={2}
            thousandSeparator={true}
            value={getBasketTotal(basket)}
            displayType={"text"}
            prefix={"$"}

            />
            <button>Proceed to checkout</button>
        </div>
    )
}
export default Subtotal;