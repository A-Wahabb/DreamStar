import React from "react";
import { Zoom } from "react-reveal";
import './AppDevelopment.css'


const AppDevelopment=()=>{
    return(
        <Zoom>
         <div>
         <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/app.jpg'}/>
         </div>
         <div  className='AppDevelopment_content'>
             <div>
                 <h1 className='AppDevelopment_heading'>ios and andorid development with react native</h1>
                       <p className='AppDevelopment_peragraf' >
                           our team deals with all sorts of Hybrid Application (Flutter) and offers development, design,
                           testing, and maintenance services for them.
                               <span>
                                   <p>
                                   </p>
                                  we DreamStarCoder provide a wide range of
                                  Hybrid Application (Flutter)web and mobile app development services that span across different industry zones, 
                                   with enterprise of varied sizes.
                                   <p/> 
                                   </span>
                                   <p>
                                      Hybrid Application (Flutter) is a framework that lets developers build native mobile apps using Dart. it enables 
                                       us to build an application for multiple platforms while using the same codebase. this can 
                                       shorten the development time of your project and reduce the overall cost of building a mobile app... 
                                   </p>
                               
                       </p>  
              </div>
         
          
          <div>
              <h1 className='AppDevelopment_heading'>our latest work</h1>
              <h1>GuestTwo</h1>
              <img className="app_img" src={process.env.PUBLIC_URL+'/guesttwoMobileApp.jpg'} alt="Guessttwo Home Pic" />
              <p className='AppDevelopment_peragraf'>
                guesttwo is an online platform in the toursim sector in pakistan.
                for guesttwo we bulit the mobile app and website using our the this state 
                of the art technology infrastructure. the web has significant visibility after 
                the initial launch and the team continues to enhance the user experience. 
              </p>
          </div>
          </div>
        </Zoom>
    )
}
export default AppDevelopment