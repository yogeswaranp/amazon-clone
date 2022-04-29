import React from "react";
import pc4 from './Image/pc4.jpg'
import './Home.css'
import book1 from './Image/book1.jpg'
import Product from './Product'
import pc5 from './Image/pc5.jpg'
import pc6 from './Image/pc6.jpg'

function Home(){
    return(
     <div className="home">
         <img className="home_image"
         src={pc4} alt='banner_logo'/>

         <div className="home-row">
             <Product
             id="1"
             title="The Lean start up: How constant innovation creates success"
             price={11.50}
             rating={5}
             image={book1}
             />
              <Product
             id="2"
             title="The Lean start up: How constant innovation creates success"
             price={11.50}
             rating={5}
             image={pc6}
             />
         </div>

         <div className="home-row">
             <Product
             id="3"
             title="The Lean start up: How constant innovation creates success"
             price={11.50}
             rating={5}
             image={book1}
             />
              <Product
             id="4"
             title="The Lean start up: How constant innovation creates success"
             price={11.50}
             rating={2}
             image={pc5}
             />
               <Product
             id="5"
             title="The Lean start up: How constant innovation creates success"
             price={11.50}
             rating={4}
             image={book1}
             />
         </div>

         <div className="home-row">
             <Product
             id="6"
             title="The Lean start up: How constant innovation creates success"
             price={11.50}
             rating={4}
             image={book1}
             />
         </div>



     </div>
    )
}
export default Home