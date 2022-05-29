import React from "react";
import { Zoom } from "react-reveal";
import './contactUs.css'

const ContactUs=()=>{
    return(
        <Zoom>
            <div>
                <img alt='Contact Us' className='contentStyle' src={process.env.PUBLIC_URL+'/contact.jpg'} />
            </div>
            <div className="contact_content">
                <span>
                    <p className="Contact_paraghrph">Hello! we are located in  (Pakistan). feel free to use the contact form
                    to reach us. our team is happy to answer all your queries.
                     </p>
                     </span>
                     <div className="form_table">
                        <div className="contact_address">
                        <h2>Gmail Address</h2>
                        <h2>dream.starcoder@gmail.com </h2>
                        <h2>Whatsapp</h2>
                        <h2>+3129009520</h2>
                        
                        </div>
                     </div>

            </div>
            
           
        </Zoom>
    )
}
export default ContactUs