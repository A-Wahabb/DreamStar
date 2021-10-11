import React from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom'
const Footer = () => {
    return (
        <div>
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
                               <div className='socialicondiv' > <img alt='Facebook' onClick={()=>{}} src={process.env.PUBLIC_URL+'\\facebok.png'} title='facebook' className='socialicon'  height={48} width={48} /></div>
                               <div className='socialicondiv'> <img alt='Twitwer' src={process.env.PUBLIC_URL+'\\twitw.png'} title='twitwer' className='socialicon'  height={48} width={48} /></div>
                               <div className='socialicondiv'><img alt='Linkdin' src={process.env.PUBLIC_URL+'\\linkdin.png'} title='linkdin' className='socialicon' height={48} width={48} /></div>
                               <div className='socialicondiv'><img alt='Whatsapp' src={process.env.PUBLIC_URL+'\\watsapp.png'} title='wathsapp' className='socialicon' height={48} width={48} /></div>
                                  </div>       
                            </div>
                            <div  className='contact_us'>
                                <h2>
                               Contact Information 
                                    </h2>
                                    <div className='logo'>
         <img src={process.env.PUBLIC_URL+'\\dsclogo.png'} title='DreamStarCoder'  height={110} width={100} />
         </div>
         <div>
            <p> DreamStarCoder (pvt) limited</p>
            <p>dream.starcoder@gmail.com</p>
            <p>+923130908533</p>
         </div>
           </div>
        </div>
         <div className='copyright_note'>
               <div> 
                   <h3 style={{color:'#fff'}}>Copyright @ 2021 DreamStarCoder (pvt) limited</h3>
                   </div>
        </div>
        </div>
    )
}

export default Footer
