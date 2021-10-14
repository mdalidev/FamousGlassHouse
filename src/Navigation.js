import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
// import './Navbar.css'
function Navigation() {
    const [hamburgerOpen,setHamburgerOpen]=useState(false);


    const toggleHamburger =()=>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <div>
        <div className="navigation">
             
             <ul>
          <li><Link to='/' className="Nheading">Home</Link></li>
          <li><Link className="Nheading"  to="/About">Appliances</Link></li>
          <li><Link className="Nheading">Cookware</Link></li>
          <li><Link className="Nheading">Bakeware</Link></li>
          <li><Link className="Nheading">Copperware</Link></li>
          <li><Link className="Nheading">Glassware</Link></li>
          <li><Link to='/Contact' className="Nheading">Kitchen Tools</Link></li>
          
                  </ul>
                  <div className="hamburger" onClick={toggleHamburger}>
                      {/* <Hamburger isOpen={hamburgerOpen}/> */}
                  </div>
                  </div>
                  <style>{`
                  .navigation{
    color:#143d59;
    background-color:white;
    width:100%;
    height:50px;
   
    
    font-family: 'Limelight', 'cursive';
    padding: 13px 15px;
    
}
.navigation ul{
    display: flex; 
  flex-wrap: wrap;
  float:right;
  margin: 0px;
  padding:0px;
  overflow: hidden;
  
    
}
.navigation  ul li{
    color:#143d59;
    list-style: none;
    padding-left: 10px;
}

.Nheading{
    color: rgb(8 28 79);
    text-decoration: none;
    padding: 7px 15px;
    margin: 15px 35px;
    font-size: 1.2rem;
    font-weight: bold;
}
.Nheading:hover{
    background-color: rgb(20 61 89);
    /* color:rgba(234,237,237); */
    border-radius: 12px;
    color: white;
}

.hamburger{
    // color:white;
    display: none;
    z-index: 6;
} 

@media  (max-width:1255px){
   .hamburger{
       display:block;
       z-index:6;
   }
   .burger{
       padding:3px;
       margin:3px ;
   }
   .navigation ul{
  display: ${hamburgerOpen ? 'inline': 'none'};
  background-color:white ;
  color: #143d59;
  height: 100vh;
  width:50vw;
  margin-top: 35px;
  position: fixed;

   }
   .navigation  ul li{
   margin:10px 0px;
   padding:10px 15px:
}
}
 `}</style>
                 
                 </div> 
    )
}

export default Navigation
