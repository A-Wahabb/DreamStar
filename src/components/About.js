import React from "react";
import { Zoom } from "react-reveal";
import './about.css'


const About=()=>{
    return(
        <Zoom>
         <div>
         <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/aboutus.jpg'}/>
         </div>
         <div className='about_content'> 
         <p className="about_paragraf">
         DreamStarCoder is a software 
         development house started in 2021 to develop mobile 
         and Web applications. We have evolved over the years 
         from Native applications to hybrid development to desktop and cloud-based opportunities.
          Our software is into many customers all over the world helping businesses simplify their day
           to day operations. We continue to grow and expand our team of dedicated staff. The main tech 
           stacks have been used in developing products  
           <Zoom>
           <ol>
        <li>MERN Stack for enterprise Web-based application </li>
        <li>WordPress to CMS based websites </li>
        <li>Native tools for mobile application development</li>
        <li>Flutter Tech for hybrid application development (IOS /ANDROID)</li>
        <li>Figma for Design and Prototype development</li>
        <li>Source control tools (Bitbucket and GitHub)</li> 
        <li>Jira and Slack for project management</li>
        <li>AWS cloud-based projects</li>
         </ol> 
         </Zoom>            
         </p>
        
         </div>
         </Zoom>  )
}

export default About