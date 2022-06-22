import React from "react";
import { Zoom } from "react-reveal";
import './AppDevelopment.css'


const AppDevelopment=()=>{
    return(
        <Zoom>
         <div>
         <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/appdevelopment.svg'}/>
         </div>
         <div  className='AppDevelopment_content'>
             <div>
                 <h1 className='AppDevelopment_heading'>IOS and Android development</h1>
                      <p className="AppDevelopment_per">
                      Our Team Deals With All Types of Native And Hybrid Solution For Application Development.
We Will Deal Yours Business Into Modern shape that will be Accessible from every type of mobile phone.


                      </p>
              </div>
         
          
          <div>
          
          </div>
          </div>
        </Zoom>
    )
}
export default AppDevelopment