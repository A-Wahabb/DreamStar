import React from "react";
import './about.css'


const About=()=>{
    return(
        <div>
         <div>
         <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/aboutus.jpg'}/>
         </div>
         <div className='about_content'> 
          <span><p className="about_paragraf">
              DreamStarCoder has born from a desire to deliver equally high standards and consistency 
              in both web & App design and development.
              <span><p className="about_paragraf">
                   DreamStarCoder is a pakistani-based software company. it has founded by creative 
                   director Mr. Wahid Ur Rahman.
                   <span><p className="about_paragraf">
                       our clients all agree we are the most affordable responsive web & app development 
                       company, delivering more to get you results. our goal is to provide a service that 
                       keeps our clients happy.
                  <span><p className="about_paragraf">
                      we're a team of designer and coders working to create beautiful, user-friendly 
                      digital experiences for important causes. we passionately believe that design & 
                      technology can be a powerful force for change.
             <span><p className="about_paragraf">
                  as a service provider, we are determined to be the luxury software development 
                  service for our clients. we are very proud as a company to always deliver on our 
                  word and our promise to our clients.
                      </p></span>
                      </p></span>
                      </p></span>
                      </p></span> 
              </p></span>
         </div>
        </div>
    )
}
export default About