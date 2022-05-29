import React from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom'
import { Zoom } from 'react-reveal'
const Footer = () => {
    return (
        <Zoom>
            <div className='footer_main'>
                            <div className='our_company'>
                                 <h2>Our Company</h2>
                                <NavLink to='/' className='link'><h3>Home</h3></NavLink>
                                <NavLink to='/about' className='link'><h3>About Us</h3></NavLink>
                                <NavLink to='/app-development' className='link'> <h3>App Development</h3></NavLink>
                                <NavLink to='/web-development'className='link'><h3>Web Development</h3> </NavLink>
                                <NavLink to='/contact-us'className='link'><h3> Contact Us</h3></NavLink>
                            </div>
                            <div className='follow_us'>
                               <h2> 
                               Follow Us
                               </h2>
                               <div className='socialicon'>
                               <div className='socialicondiv' > <img alt='Facebook' onClick={()=>{}} src={process.env.PUBLIC_URL+'\\facebok.png'} title='facebook' className='socialicon'  height={20} width={20} /></div>
                               <div className='socialicondiv'> <img alt='Twitwer' src={process.env.PUBLIC_URL+'\\twitw.png'} title='twitwer' className='socialicon'  height={20} width={20} /></div>
                               <div className='socialicondiv'><img alt='Linkdin' src={process.env.PUBLIC_URL+'\\linkdin.png'} title='linkdin' className='socialicon' height={20} width={20} /></div>
                               <div className='socialicondiv'><img alt='Whatsapp' src={process.env.PUBLIC_URL+'\\watsapp.png'} title='wathsapp' className='socialicon' height={20} width={20} /></div>
                                  </div>       
                            </div>
                            <div  className='contact_us'>
                                <h2>
                               Contact Information 
                                    </h2>
                                   
         <div>
            <p className='company_name'> DreamStarCoder (pvt) limited</p>
            <div className='gmail_div'>
                <img alt='g-mail' className='gmail_icon' src={process.env.PUBLIC_URL+'/email.png'} />
                 <p className='Eamil_address'>dream.starcoder@gmail.com</p>
            </div>
            <div className='mobile_div'>
            <img alt='Mobile' className='mobile_icon' src={process.env.PUBLIC_URL+'/mobile.png'} />
            <p>+3129009520</p></div>
            <div className='logo'>
         <img src={process.env.PUBLIC_URL+'\\dsclogo.png'} alt='DreamStarCoder' title='DreamStarCoder'  height={90} width={74} />
         </div>
         </div>
           </div>
        </div>
               
                   <h3 className='copyright_note'>Copyright @ 2022 DreamStarCoder (pvt) limited</h3>
                   
        </Zoom>
    )
}

export default Footer
