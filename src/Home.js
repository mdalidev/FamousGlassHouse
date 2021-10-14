import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fbanner3 from './fbanner3.jpg'
import bigimage from './bigimage.jpg'
import logo4 from './logo4.svg'
import './Home.css'
import b1 from './Homebanner/b1.jpeg'
import b2 from './Homebanner/b2.jpeg'
import b3 from './Homebanner/b3.jpeg'
import b4 from './Homebanner/b4.jpg'
import b5 from './Homebanner/b5.jpg'
import b6 from './Homebanner/b6.jpg'
import b7 from './Homebanner/b7.jpg'

import Product from './Product'
import Contact from './Contact'


export default function Home() {
  var cycle=1;
     const [currentImage,SetImages]=useState("url("+b7+")")
  
  let images =[b1,b2,b3,b4,b5,b6,b7];
  // var imgPath;
 function f1(){
  if(cycle<images.length){

SetImages("url("+images[cycle]+ ")")
 
cycle++
}
     else {
       cycle=-1
     }
}
  setTimeout(f1,3000);
    return (
        <div className="home">
           <div className="home_img" 
           style={
             {backgroundImage:currentImage,backgroundRepeat:'no-repeat',backgroundSize:'auto',backgroundPosition:'center center'}
            
            
            
            
            
            }></div>

           





            <img className="home_img" src="https://t.infibeam.com/img/shrd/banners/74/30/535/2570cc88954d5_bannerd02.png.999x1366x.png" alt="" />
            {/* <img  className="home_img" src={imgPath} alt="" /> */}
            {/* <img  className="home_img" style={{backgroundImage:currentImage}} alt="" /> */}
        <section className="homeSection">
      <h1 className="h-primary">Welcome to Famous Glass</h1>
      <p>
        <strong>Deals in:</strong>
      </p>
      <p>
       <h4>Crockery,Glass Ware Maelamine,Stone Ware,Home Appliances & House Hold Items</h4>
      </p>
      <button className="btn">Order Now</button>
    </section>
         <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={399}
            rating={5}
            image="https://www.sowbaghya.com/image/cache/catalog/Cookware-NonStick/15pcs%20dinner%20set-228x228.jpg"
          />
         
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={4239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/616B2ujqmxL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={4239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/616B2ujqmxL._SL1500_.jpg"
          />
      
      
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={3199.99}
            rating={3}
            image="https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMHAWKINS-CLASGUPT115909925DFA24B/1618836288941_0.jpg?imwidth=320&impolicy=hq"
          />
         
       
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={35998.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51tpiiLt32S._SX522_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={35998.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NH2hSdxvL._SX679_.jpg"
          />
        </div>

        <div className="home_row">
        
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={30945.98}
            rating={4}
            // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            image={bigimage}
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={30945.98}
            rating={4}
            // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            image={bigimage}
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={30945.98}
            rating={4}
            // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            image={bigimage}
          />
         </div>
      <div className="contact_row">
         <Contact/>
      
      </div>
          
         </div>

      
       
    )
}

// export default Home
