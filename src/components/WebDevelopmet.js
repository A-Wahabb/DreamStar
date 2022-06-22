import React from "react";
import { Zoom } from "react-reveal";
import './WebDevelopment.css'

const WebDevelopment=()=>{
    return(
        <Zoom>
            <div>
                <img alt='WebDevelopment' className='contentStyle' src={process.env.PUBLIC_URL+'/webdevelopment.svg'}/>
            </div>
           <div className="WebDevelopment_content">
               <span className="web_content">
                   <h1 className="web_heading">web development</h1>
                   </span>
               <span>
                   <p className="web_paragraf">
                       We specialize in developing beautiful & engaging website with a variety of technology 
                       stacks. our aim is to create solutions that are robust and reliable, and we are 
                       always using the most up-to-date technology and efficient UI/UX. 
                   </p>
               </span>
               <span><h1 className="web_heading">design & features</h1></span>
               <span><p className="web_paragraf">
                     Good website design benefits users by facilitating their search for information quickly and easily.
                     <span>
                         <p>
                         DreamStarCoder has many ways to improve a site's usability. we use the correct labels for all fields 
                         and follow good from design principles.</p>
                     </span>
                   </p></span>
            
             
             {/* <span><h1 className="web_heading">our latest work</h1></span>
             <span><h1 className="guesttwo_heading">guesttwo</h1></span> */}
             {/* <img className="web_app_img" src={process.env.PUBLIC_URL+'/guesttwoHomePic.png'} alt="Guessttwo Home Pic" /> */}
             {/* <span><p className="web_paragraf">
                 guesttwo is an online platform in the tourism sector in pakistan. for guesttwo we bluilt the 
                 mobile app and website using our the state of the art technology infrastructure. the web has significant 
                 visibility after the initial launch and the team continues to enhance the user experience.
                 </p></span> */}
           </div>
        </Zoom>
    )
}
export default WebDevelopment