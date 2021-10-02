import React from "react";
import './home.css';

import { Carousel } from 'antd'


const Home=()=>{
    return(
        <div className='home'>
           
           
           <div className='slider'>
           <Carousel autoplay style={{width:'100%'}}  >
           <div>
           <img alt='Not Found' className='contentStyle' src={process.env.PUBLIC_URL+'/slideone.jpg'}/>
          </div>    
           <div>
           <img alt='Not Found' className='contentStyle'src={process.env.PUBLIC_URL+'/ui.jpg'}/>
          </div>
          <div>
           <img alt='Not Found' className='contentStyle'src={process.env.PUBLIC_URL+'/app.jpg'}/>
          </div>
          <div>
           <img alt='Not Found' className='contentStyle'src={process.env.PUBLIC_URL+'/web.jpg'}/>
          </div>
  </Carousel>
           </div>
           <br/>
           <div className='home_content'>
                        <h2 className='firstheading'>
                            web development
                        </h2>
                        <p>
                            we specilise in devloping beautiful & engaging website with a variety 
                            of teacnolgy stacks.our aim is to create solutions that are robust and 
                            reliable, and we are always using the most up-to-date teacnolgy and 
                                                efficient ui/ux.

                        </p>
           </div>
        </div>
    )
}
export default Home