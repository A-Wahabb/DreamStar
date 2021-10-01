import React from "react";
import { Carousel } from 'antd';
import dsclogo from '../dsclogo.png'
const contentStyle = {
    width:'100%',
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Home=()=>{
    return(
        <div className='home'>
           
           <div className='slider'>
           <Carousel style={{width:'100%'}}  >
           <div>
           <img alt='Not Found' style={contentStyle} src={process.env.PUBLIC_URL+'/slideone.jpg'}/>
          </div>    
           <div>
           <img alt='Not Found' style={contentStyle} src={process.env.PUBLIC_URL+'/ui.jpg'}/>
          </div>
          <div>
           <img alt='Not Found' style={contentStyle} src={process.env.PUBLIC_URL+'/app.jpg'}/>
          </div>
          <div>
           <img alt='Not Found' style={contentStyle} src={process.env.PUBLIC_URL+'/web.jpg'}/>
          </div>
  </Carousel>
           </div>
        </div>
    )
}
export default Home