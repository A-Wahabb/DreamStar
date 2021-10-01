import React from 'react'
import './slider.css'
 import { Carousel } from 'antd';

 //importing slider images
 import slideone from '../../Assets/Images/Slider/slideone.jpg'
 import webDevelopment from '../../Assets/Images/Slider/wedDevelopment.jpg'
 import AppDevelopment from '../../Assets/Images/Slider/AppDevelopment.jpg'


const Slider = () => {

    
    return (
        <div>
        <div  className='heroBlock'>
        <Carousel autoplay effect='scrollx'>
    <div>
        <img src={slideone} alt='slideone'  width='100%' height='600px'/>
    </div>
    <div>
        <img src={webDevelopment} alt='webDevelopment'  width='100%' height='600px'/>
    </div>
    <div>
        <img src={AppDevelopment} alt='AppDevelopment' width='100%' height='600px'/>
    </div>
    
    
  </Carousel>
        </div>

    </div>
    )
}

export default Slider
