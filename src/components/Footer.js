import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer_main'>
                            <div>
                                <h2 className='our_company'>Our Company</h2>
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
                               <p>follow us</p>
                               <p>follow us</p>
                               <p>follow us</p>
                               <p>follow us</p>
                                    
                            </div>
                            <div>
                                <h2  className='contact_us'>
                                 Contact US 
                                    </h2>
                                    <div className='logo'>
         <img src={process.env.PUBLIC_URL+'\\dsclogo.png'} title='DreamStarCoder'  height={110} width={100} />
         </div>
           </div>
             
             <br/>
        
           
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
