import React from "react";
import './Product.css'
import { useStateValue } from "./StateProvider";


function Product({id,title,price,image,rating}){
    const [,dispatch]= useStateValue();
    const addToBasket = ()=>{
         dispatch({
             type:'ADD_TO_BASKET',
             item:{
                 id:id,
                 price:price,
                  title:title,
                  image:image,
                  rating:rating
              }
         })
    }
    return(
        <div className="product">
            <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product-rating">
                {Array(rating)
                .fill()
                .map(()=>(
                    <p>*</p>
                ))}
             </div>
            </div>
          
            <img src={image} alt="content_image"/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
export default Product;