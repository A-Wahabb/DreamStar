import React from "react";
import './about.css'


const About=()=>{
    return(
        <div>
         <div>
         <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/aboutus.jpg'}/>
         </div>
         <div className='about_content'>
             <div>
             <h2 className='headingone'>what we are </h2>
             <h3 className='headings'>we are a pakistani owned </h3>
             <h3 className='headings'> software developmnet company</h3>
             <h3 className='headings'>our office in peshawar</h3>
             <p className='about_paragraf'>as a service provider, we are determoined to be the luxury software development service for our clients
                 we are very proud as a company to always deliver on our word and our promise to iur clients.
             </p>
             </div>
             <div>
                   <h1 className='whatwedo'>what we do</h1>
                   <p className='whatwedoperagraf'>
                       DreamStarCoder help businesses elevate their value through custom software.
                       development, prouduct design. QA & consultancy services. we can help to maintain 
                       and modernize it infrastructure and solve various issues abusiness may face. 
                   </p>
                   </div>
         <div>
             <h1 className='vision_heading'>our vision</h1>
             <p className='vision_peragraf' >
                 our vision is to be leader in the area of business software development . we know,
                  there are lot of measurements to fulfil to achieve our vision. but we are optimisis. we are
                  hardworking. our team is innovative and goal oriented. our mission is achieving greater customer 
                  satisfaction.
             </p>
         </div>
         </div>
        </div>
    )
}
export default About