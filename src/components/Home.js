import React from "react";
import './Home.css';




const Home=()=>{
    return(
        <div className='home'>
           <h1>home</h1>
           
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