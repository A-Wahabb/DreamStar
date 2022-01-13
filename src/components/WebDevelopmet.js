import React from "react";
import './WebDevelopment.css'

const WebDevelopment=()=>{
    return(
        <div>
            <div>
                <img alt='WebDevelopment' className='contentStyle' src={process.env.PUBLIC_URL+'/web.jpg'}/>
            </div>
           <div className="WebDevelopment_content">
               <span className="web_content">
                   <h1 className="web_heading">web development</h1>
                   </span>
               <span>
                   <p className="web_paragraf">
                       we specisllise in developing beautiful & engaging website with a varity of teachnolgy 
                       stacks. our aim is to create solutions that are robust and relliable, and we are 
                       always using the most up-to-date technolgy and efficient UI/UX. 
                   </p>
               </span>
               <span><h1 className="web_heading">design & features</h1></span>
               <span><p className="web_paragraf">
                     good website design benefits users by facilitating their search for information quickly and easily.
                     <span>
                         <p>
                         DreamStarCoder has many ways to improve a site's usability. we use the correct lables for all fields 
                         and follow good from desgin principles.</p>
                     </span>
                   </p></span>
              <span><h1 className="web_heading">user friendly</h1></span>
              <span><p className="web_paragraf">
                  your site will become usable if it is not user friendly, and you will lose out on new customers & revenue every time 
                  it is unavailable.
                  <span><p>
                      google has also moved towards a mobile-first index meaning they index mobile versions of sites. a good mobile site 
                      is thus critical to getting better search results.
                      </p></span> 
                  </p></span>
             <span><h1 className="web_heading">our latest work</h1></span>
             <span><h1 className="guesttwo_heading">guesttwo</h1></span>
             <img className="app_img" src={process.env.PUBLIC_URL+'/guesttwoHomePic.png'} alt="Guessttwo Home Pic" />
             <span><p className="web_paragraf">
                 guesttwo is an online platform in the tourism sector in pakistan. for guesttwo we bluilt the 
                 mobile app and website using our the state of the art technology infrastructure. the web has significant 
                 visibility after the initial launch and the team continues to enhance the user experience.
                 </p></span>
           </div>
        </div>
    )
}
export default WebDevelopment