import React from "react";
import './WebDevelopment.css'

const WebDevelopment=()=>{
    return(
        <div>
            <div>
                <img alt='WebDevelopment' className='contentStyle' src={process.env.PUBLIC_URL+'/web.jpg'}/>
            </div>
            <div className='WebDevelopment_content'>
                <div className='web_content'>
                           <h1 className='web_heading'>web development</h1>
                           <p className='web_paragraf'>
                               we specialise in developing beautiful & engaging website with a variety 
                               of technology stacks. our aim is to create solution that are robust and
                               reliable, and we are always using the most up-to-date technology and
                                efficient UI/UX.  
                           </p>
                </div>
                 
                 <div className='web_content'>
                                <h1 className='web_heading'>user friendly</h1>
                                <p className='web_paragraf' >
                                    your site will become unusable if it is not user friendly, and you will lose out 
                                    out on new customers & revenue every time it is a unavailable. 
                                </p>
                                <p className='web_paragraf'>
                                    google has also moved towards a mobile-first index meaning they index mobile versions of sites. a
                                    good mobile site is thus critical to getting better search results.
                                </p>
                 </div>
                 <div className='web_content'>
                                <h1 className='web_heading'>design & features</h1>
                                <p className='web_paragraf' >
                                    good website design benefits users by facilitating their search for information quickly and easily.
                                     dreamStarCoder has many ways to improve a site usability. we use the correct labels for 
                                     all fields and follow good form design principles.
                                </p>      
                 </div>
                

            </div>
        </div>
    )
}
export default WebDevelopment