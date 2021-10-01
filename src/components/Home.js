import React from "react";
import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
let AppDevelopment =require("../Assets/AppDevelopment.jpg");

const Home=()=>{
    return(
        <div className='home'>
           <div className='slider'>
           <Carousel style={{width:'100%'}} autoplay>
           <div>
           
          </div>
        
  </Carousel>
           </div>
        </div>
    )
}
export default Home