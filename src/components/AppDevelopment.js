import React from "react";
import './AppDevelopment.css'


const AppDevelopment=()=>{
    return(
        <div>
         <div>
         <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/app.jpg'}/>
         </div>
         <div className='AppDevelopment_content'>
             <div className='AppDevelopment_heading'>
                 <h1 style={{color:'#448ee4'}}>App Development</h1>
                 </div>
               <div className='AppDevelopment_peragraf' >
                       <p>
                           dreamStarCoder provides complete software product development services, software lifecycle and
                           updates services. the company has many years experiance in design, development and maintenance
                           of software products. we take ideas from which we design and build software adding innovation and
                           creativity into the product. 
                       </p>
                       <p>
                           we naver give a commitment that we can't keep. we challenge ourselves with the most 
                           current and cutting-edge problems and we take pride in solving them. we are highly qualified 
                           to provide software solution which are reliable, flexible, essy to use.
                       </p>
               </div>
         </div>

        </div>
    )
}
export default AppDevelopment