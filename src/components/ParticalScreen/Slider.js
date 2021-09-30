import React from 'react'
import './slider.css'
 import { Carousel } from 'antd';

 //importing slider images
 import slideone from '../../Assets/Images/Slider/slideone.jpg'
 import webDevelopment from '../../Assets/Images/Slider/webDevelopment.jpg'
 import AppDevelopment from '../../Assets/Images/Slider/AppDevelopment.jpg'


const Slider = () => {
    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
            console.info(isMobile)
        } else {
            setIsMobile(false)
          
        }
      }
      useEffect(()=>{
        handleResize()
       
    },[])
      useEffect(()=>{
          window.addEventListener('resize',handleResize)
      })
    return (
        <div>
        <div  className='heroBlock'>
        <Carousel autoplay effect='scrollx'>
    <div>
        <img src={slideone} alt='slideone'  width='100%' height={!isMobile?'600px':'350px'}/>
    </div>
    <div>
        <img src={webDevelopment} alt='webDevelopment'  width='100%' height={!isMobile?'600px':'350px'}/>
    </div>
    <div>
        <img src={AppDevelopment} alt='AppDevelopment' width='100%' height={!isMobile?'600px':'350px'}/>
    </div>
    
    
  </Carousel>
        </div>

    </div>
    )
}

export default Slider
