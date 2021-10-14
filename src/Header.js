import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import logo4 from'./logo4.svg'
import flogo from'./flogo.svg'
import logoo4 from './logoo4.svg'
import logon1 from'./logon1.svg'
import logon2 from'./logon2.svg'
import logon3 from'./logon3.png'
import logo from'./logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
import Navigation from './Navigation'
import Hamburger from './Hamburger'
import { fontSize } from '@mui/system'

function Header() {
  const [hamburgerOpen,setHamburgerOpen]=useState(false);


  const toggleHamburger =()=>{
      setHamburgerOpen(!hamburgerOpen)
  }



  const [{basket,user}]= useStateValue();
  const login = ()=>{
    if(user)
{
  auth.signOut();
}  
};
    return (
      <>
     
    
     
     <nav className="header">
        
       <div className="header_topsection">
        <ul>
          <li><Link to='/' className="heading">Home</Link></li>
          <li><Link className="heading"  to="/About">About</Link></li>
          <li><Link className="heading">Join Now</Link></li>
          <li><Link to='/Contact' className="heading">Contact Us</Link></li>
          
                  </ul>
      </div>
      <div className="header2">
     
      <div className="hamburger" onClick={toggleHamburger}>
                      <Hamburger isOpen={hamburgerOpen}/>
                  </div>
                  
                 
         {/* Logo on the Left -> img */}
         <Link to="/">  
         <img className="header_logo" src={flogo} alt=""  />
         {/* <img className="header_logo" src="https://www.designevo.com/" alt=""  /> */}
</Link>
   {/* SearchBox */}
    <span className="header_search"> <input type="text" className="header_searchInput" placeholder="Serach your Product " />
   <SearchIcon className="header_searchIcon" style={{fontSize:'50'}}/>
   </span>
  
   
  
  {/* 3Links */}
  <div className="header_nav">
      {/* 1st Link */}
      <Link  to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLine1">Hello, {!user?'Guest':user.email}</span> 
            <span  className="header_optionLine2">{user?'Sign Out':'Sign In'}</span> 
             </div> 
      </Link>
      {/* 2nd Link */}
      <Link  to="/"className="header_link">
          <div className="header_option">
            <span  className="header_optionLine1">Return </span> 
          <span className="header_optionLine2"> & Orders</span> 
             </div> 
      </Link>
      {/* 3rd link Link */}
      <Link  to="/"className="header_link">
          <div className="header_option">
            <span  className="header_optionLine1">Your </span> 
            <span className="header_optionLine2">Profile <PersonIcon /></span> 
           
             </div> 
      </Link>
     {/* 4th Link */}
     <Link to="/checkout" className="header_link">
     <div className="header_optionBasket">
         {/* Shopping Basket Icon */}
         <ShoppingCartIcon   />
         {/* Number of item in the basket */}
         <span  className="header_optionLine2 header_basketcount">{basket?.length}</span>
     </div>
</Link>
</div>
  </div>
 
 
      {/* <Navigation/> */}
      <div className="navigation">
             
             <ul>
          <li><Link to='/' className="Nheading" >Home</Link></li>
          <li><Link className="Nheading"  to="/About">Appliances</Link></li>
          <li><Link className="Nheading">Cookware</Link></li>
          <li><Link className="Nheading">Bakeware</Link></li>
          <li><Link className="Nheading">Copperware</Link></li>
          <li><Link className="Nheading">Glassware</Link></li>
          <li><Link className="Nheading">Bakeware</Link></li>
          <li><Link className="Nheading">Dinnerware</Link></li>
          <li><Link className="Nheading">Kitchen Decor</Link></li>
          <li><Link to='/Contact' className="Nheading">Kitchen Tools</Link></li>
          <li><Link to='/Contact' className="Nheading">Storage</Link></li>
          
                  </ul>
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
  padding: 7px 27px;
  // margin: 0px 10px;
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
@media (max-width:1456px){
  .Nheading{
   
 padding: 7px 17px;
 

  }
 
}

@media  (max-width:1255px){
   .hamburger{
     margin:10px 2px;
     padding:2px 2px;
       display:block;
       z-index:6;
   }
   @media(max-width:988px){
    .hamburger{
       margin:6px 2px;
    padding:2px 2px;
    }
   
   }
  
 
  
   .burger{
       padding:3px;
       margin:3px ;
   }
   
    .navigation{
      display: ${hamburgerOpen ? 'contents': 'none'};
    }
  
  
   .navigation ul{
  display: ${hamburgerOpen ? 'inline': 'none'};
  background-color:white ;
  color: #143d59;
  height: 100vh;
  width:50vw;
  // margin-top: 35px;
  position: fixed;

   }
   .navigation  ul li{
   margin:10px 0px;
   padding:10px 15px:
}
}
 `}</style>




     </nav>
     
     </>
    )
}

export default Header
