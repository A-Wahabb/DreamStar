import React from "react";
import { Bounce, Zoom } from "react-reveal";
import './contactUs.css'

const ContactUs = () => {
    return (
        <Zoom>
            <div>
                <img alt='Contact Us' className='contentStyle' src={process.env.PUBLIC_URL + '/contactus.svg'} />
            </div>
            <div >
                <p className="contact_content">
                    <br></br>
                    <pre >Hello! we are located in  (Pakistan).
                        Feel free to use the contact form
                        to reach us. our team is happy to answer all your queries.
                    </pre>
                </p>
                <div className="form_table">
                    <Bounce>
                        <div className="contact_address">


                            <form onSubmit={(e) => {
                                e.preventDefault();

                                window.open(`mailto:dream.starcoder@gmail.com?subject=${e.target}
                               &body=${e.targetname}: ${e.targetmessage}`);


                            }}>
                                <h3 className="form_heading">Enquiry</h3>
                                <label>Your Name *</label> <br />
                                <input label="Your Name*" name="Your Name*" className="input_field" type="text" placeholder="Name*" required /><br />
                                <label>Your Email *</label> <br />
                                <input className="input_field" type="email" placeholder="Email*" required /><br />
                                <label>Subject *</label> <br />
                                <input className="input_field" type="text" placeholder="Subject*" required /><br />
                                <label>Comment *</label> <br />
                                <textarea name="comment_textarea" placeholder="Please include your massage here*" cols="30" rows="10" /><br />
                                <Zoom>
                                    <input className="submit_reset_button" type='submit' />
                                    <input className="submit_reset_button" type="reset" />
                                </Zoom>
                            </form>

                            <h3>Whatsapp</h3>
                            <Bounce><pre><a href="whatsapp://send?abid=+92-3129009520&text=Hello%2C%20DreamStarCoder Team!">  Please click To Send Message</a></pre>
                            </Bounce>
                        </div>
                    </Bounce>
                </div>

            </div>


        </Zoom>
    )
}
export default ContactUs