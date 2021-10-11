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
                               <div className='socialicon'>
                             <div className='socialicondiv'>  
                             <img alt='Facebook' src={process.env.PUBLIC_URL+'\\facebok.png'} title='facebook' className='socialicon' />
                             </div>
                              <div className='socialicondiv'>
                                   <img alt='Twitwer' src={process.env.PUBLIC_URL+'\\twitw.png'} title='twitwer' className='socialicon'  />
                                   </div>
                               <div className='socialicondiv'>
                                   <img alt='Linkdin' src={process.env.PUBLIC_URL+'\\linkdin.png'} title='linkdin' className='socialicon'  />
                                   </div>
                               <div className='socialicondiv'>
                                   <img alt='Whatsapp' src={process.env.PUBLIC_URL+'\\watsapp.png'} title='wathsapp' className='socialicon' />
                                   </div>
                                  </div>       
                            </div>
                            <div  className='contact_us'>
                                <h2>
                               Contact Information 
                                    </h2>
                                    <div className='logo'>
         <img src={process.env.PUBLIC_URL+'\\dsclogo.png'} title='DreamStarCoder'  height={90} width={74} />
         </div>
         <div>
            <p className='company_name'> DreamStarCoder (pvt) limited</p>
            <div className='gmail_div'>
                <img alt='g-mail' className='gmail_icon' src={process.env.PUBLIC_URL+'/email.png'} />
                 <p className='Eamil_address'>dream.starcoder@gmail.com</p>
            </div>
           
            <p>+923130908533</p>
         </div>
           </div>
        </div>
               <div> 
                   <h3 className='copyright_note'>Copyright @ 2021 DreamStarCoder (pvt) limited</h3>
                   </div>
        </div>
    )
}

export default Footer
