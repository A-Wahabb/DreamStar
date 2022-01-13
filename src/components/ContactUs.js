import React from "react";
import './contactUs.css'

const ContactUs=()=>{
    return(
        <div>
            <div>
                <img alt='Contact Us' className='contentStyle' src={process.env.PUBLIC_URL+'/contact.jpg'} />
            </div>
            <div className="contact_content">
                

            </div>
            
           
        </div>
    )
}
export default ContactUs