import React from "react";
import './contactUs.css'

const ContactUs=()=>{
    return(
        <div>
            <div>
                <img alt='Contact Us' className='contentStyle' src={process.env.PUBLIC_URL+'/web.jpg'} />
            
            </div>
            <div className='contact_content'>
                <p className='contact_paragrf'>
                    our team is happy to answer all your queries. fill out the form below and we get in touch
                                      as possible.
                </p>
            </div>
            <div className='contact_form'>
                <form>
                    <br />
                <input className='name_input' 
                placeholder='Name'
                type='text' 
                name='Full Name'
                required />
                <br />
                    <br />
                <input className='name_input'
                 placeholder='Phone Number'
                 type='number' 
                name='Phone Number'
                 required />  
                <br />  
              
                    <br />           
                <input className='name_input'
                 placeholder='Gmail Address' 
                 type='email' 
                name='Email Address'
                 required />
                <br />
               
                    <br />
                   
                 <br/>
                 <br/>
                 <button className='send_btn'>Send</button>
                </form>
            </div>
            <div className='Email_address'>
                <div>
            <img alt='g-mail' className='gmail_icon' src={process.env.PUBLIC_URL+'/email.png'} /></div>
                     <div> <p> dream.star@gmail.com</p></div>
            </div>
           
        </div>
    )
}
export default ContactUs