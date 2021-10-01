import React from "react"
import { Carousel } from 'antd'
import './home.css'

const Home=()=>{
    return(
        <div className='home'>
           <div className='slider'>
           <Carousel style={{width:'100%'}}  >
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
        </div>
    )
}
export default Home