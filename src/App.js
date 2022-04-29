import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
function App() {
  const [,dispatch]= useStateValue()
  
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch ({
          type:'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return ()=>{
      unsubscribe();
    }
  },[]);

  //  console.log("user..is",user)
  return (
    <BrowserRouter>
    
   

       <div className=' app'>
         <Routes>
          <Route path="/"
           element={<> <Header/> <Home/> </>}> 
          </Route>
          <Route path="/login" 
          element={<><Login/></>}>
          </Route>
          <Route path="/checkout"element= {<><Header/> <Checkout/></>}></Route>
         </Routes>

       </div>

    </BrowserRouter>
  
  )
}

export default App;
