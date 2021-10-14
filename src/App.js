import React, { useState,useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import CheckOut from './CheckOut';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';


function App() {
  const [{basket},dispatch]=useStateValue();
  //  USeEffect <<<<<<<< PowerFul
  // Piece of code which runs based on a given COndition
  useEffect(() => {
     const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
// The User Logged In........
dispatch({
  type:"SET_USER",
  user:authUser
})
 }
 else{
  //  The USer is Logged out......
  dispatch({
    type:"SET_USER",
  user:null,
  })
 }
    })
    return ()=>{
      
      unsubscribe();
    }
   
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route  exact   path="/" >
          <Header/>
         <Home/>
         <Footer/>
         
          </Route>
          <Route  exact path="/checkout">
          <Header/>
          <CheckOut/>
          </Route>
         
          <Route exact  path="/login">
     <Login/> 
          </Route>
          <Route exact   path="/about" >
          <Header/>
       <About/>
       <Footer/>
      </Route>
          <Route exact   path="/Contact" >
          <Header/>
           <Contact/>
           <Footer/>
            </Route>
         

        </Switch>
        </div> 
  
    </Router>
   
  );
}

export default App;
