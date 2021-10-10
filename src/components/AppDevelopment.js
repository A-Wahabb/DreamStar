import React from "react";
import './AppDevelopment.css'


const AppDevelopment=()=>{
    return(
        <div>
         <div>
         <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/app.jpg'}/>
         </div>
         <div  className='AppDevelopment_content'>
             <div>
                 <h1 className='AppDevelopment_heading'>App Development</h1>
                       <p className='AppDevelopment_peragraf' >
                           dreamStarCoder provides complete software product development services, software lifecycle and
                           updates services. the company has many years experiance in design, development and maintenance
                           of software products. we take ideas from which we design and build software adding innovation and
                           creativity into the product. 
                       </p>
                       <p className='AppDevelopment_peragraf'>
                           we naver give a commitment that we can't keep. we challenge ourselves with the most 
                           current and cutting-edge problems and we take pride in solving them. we are highly qualified 
                           to provide software solution which are reliable, flexible, essy to use.
                       </p>
              </div>
         
          
          <div>
              <h1 className='AppDevelopment_heading'>project Manager</h1>
              <p className='AppDevelopment_peragraf'>
                before getting in to the work. our project management team first analyses the real requirements
                 functionality. staffing and objectives. we never make a commitment that we can't keep. we spend 
                 good time in writing a plan. and we estimate the time lines based on the effort we have to put and 
                 we feel the task is completed when they are 100% complete.
              </p>
               <p className='AppDevelopment_peragraf'>
                   we follow a development process to make a successful completion of the assigment we undertake. 
                   our process involves business analysis, specification, system analysis and design, implementation & 
                   testing.
               </p>

          </div>
          <div>
              <h1 className='AppDevelopment_heading'>technology we use</h1>
              <div className='technology_icon'>
              <div>
                <img alt='Andriod' className='icons' src={process.env.PUBLIC_URL+'/andriodicon.png'}/>
                    <figcaption className='Andriodcaption'>Andriod</figcaption>
              </div>
              <div>
                <img alt='Andriod' className='icons' src={process.env.PUBLIC_URL+'/andriodicon.png'}/>
                    <figcaption className='Andriodcaption'>Andriod</figcaption>
              </div>
              </div>
          </div>
         </div>
        </div>
    )
}
export default AppDevelopment