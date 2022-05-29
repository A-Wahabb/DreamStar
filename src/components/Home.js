import React from "react";
import './home.css';

import { Bounce, Zoom } from "react-reveal";


const Home=() =>{
    return(
        <Zoom>
        <div className='home'>
           
           <div className='slider'>
          
           <div>
           <img alt='DreamStarCoder' className='contentStyle' src={process.env.PUBLIC_URL+'/slideone.jpg'}/>
          </div>    
           <div>
           <img alt='UI&UX' className='contentStyle'src={process.env.PUBLIC_URL+'/ui.jpg'}/>
          </div>
          <div>
           <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/app.jpg'}/>
          </div>
          <div>
           <img alt='WebDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/web.jpg'}/>
          </div>

           </div>
           <br/>
                         <div>
                        <h1 className='firstheading'>
                            Welcome to the dreamStarCoder
                        </h1>
                        </div>
                        <div className='home_content'>
                        <p>
                            DreamStarCoder is a software company that provides services by converting your ideas into 
                            a solid. Product along respecting the standardized life cycle and ethics of the softawre community.
                            Our team would cpnvert your ideas into a market-competitive product and lead your business high up to the sky. 
                                
                        </p>
                        <div className='readmorediv'>
                        <button className='readmorebtn'>Read more</button></div>
           </div>
           <div className='webmobAppdlp'>
                      <h2 className='webmobAppdlp_heading'>web & mobile Application development</h2>
                      <p className='webmobAppdlp_peragrf'>
                      We deliver an incredible mobile experience with native ios and android apps and when it comes
                      to a cross-platform solution, Our expertise and technology provide a good balance between
                       development efficiency and the performance and feel of a native application. We also build
                        react applications that are efficient, and easy to maintain.  
                      </p>  
                      <div className='rdmdiv'>
                        <button className='rdmbtn'>read more</button></div>
           </div>
          
               <Bounce className="ourpartnersmaindiv">
                   <span>
                       <h1 className='headingourpartners'>our trusted partners</h1>
                   </span>
                   <div className="our_trasted_partners_icons">
                   <span>
                       <img  className="our_trasted_partners_icons_syle_one" src={process.env.PUBLIC_URL+'/guesttwo.png'} alt="Guesstwo Icon" />
                       <img  className="our_trasted_partners_icons_syle_two" src={process.env.PUBLIC_URL+'/wirelessmerch.png'} alt="Wirelessmerch Icon" />
                   </span>
                   </div>
               </Bounce>
        </div>
        </Zoom>
    )
}
export default Home