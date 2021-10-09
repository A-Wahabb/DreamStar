import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer_main'>
                            <div className='our_company'>
                                <h2>Our Company</h2>
                                <h3>Home</h3>
                                <h3>About Us</h3>
                                <h3>App Development</h3>
                                <h3>Web Development</h3>
                                <h3> Contact Us</h3>
                            </div>
                            <div className='follow_us'>
                               <h2> 
                               Follow Us
                               </h2>
                               <img alt='Facebook' src={process.env.PUBLIC_URL+'\\facebok.png'} title='facebok' className='socialicon'  height={48} width={48} />
                               <img alt='Twitwer' src={process.env.PUBLIC_URL+'\\TWITER.png'} title='twitw' className='socialicon'  height={48} width={48} />
                               <img alt='Linkdin' src={process.env.PUBLIC_URL+'\\linkdin.png'} title='linkdin' className='socialicon' height={48} width={48} />
                               <img alt='Whatsapp' src={process.env.PUBLIC_URL+'\\watsapp.png'} title='watsapp' className='socialicon' height={48} width={48} />

                                    
                            </div>
                            <div  className='contact_us'>
                                <h2>
                                 Contact US 
                                    </h2>

                                    <div className='logo'>
         <img src={process.env.PUBLIC_URL+'\\dsclogo.png'} title='DreamStarCoder'  height={110} width={100} />
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
