import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { Bounce, Zoom } from "react-reveal";
import ScrollToTop from "../scroll";
const Footer = () => {
  return (
    <Zoom>
      <div className="footer_main">
        <div className="our_company">
          <h2>DreamStarCoder (pvt) limited</h2>
          <ul className="footer-nav">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                Home <ScrollToTop />
              </NavLink>
            </li>
            <li>
              <NavLink to="/web-development" activeClassName="selected">
              Web Development
                <ScrollToTop />
              </NavLink>
            </li>
            <li>
              <NavLink to="/app-development" activeClassName="selected">
                App Development
                <ScrollToTop />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="selected">
                About Us <ScrollToTop />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" activeClassName="selected">
                Contact Us
                <ScrollToTop />
              </NavLink>
            </li>
          </ul>
        </div>
        <Bounce>
          <div className="follow_us">
            <h2>Follow Us</h2>
            <div className="socialicondiv">
                <img
                  alt="Linkdin"
                  src={process.env.PUBLIC_URL + "\\linkdin.png"}
                  title="linkdin"
                  className="socialicon"
                  height={20}
                  width={20}
                />
              
    
                <img
                  alt="Whatsapp"
                  src={process.env.PUBLIC_URL + "\\watsapp.png"}
                  title="wathsapp"
                  className="socialicon"
                  height={20}
                  width={20}
                />
          </div> 
          </div>
        </Bounce>
        <div className="contact_us">
          <h2>Contact Information</h2>

          <div>
            <div className="gmail_div">
              <img
                alt="g-mail"
                className="gmail_icon"
                src={process.env.PUBLIC_URL + "/email.png"}
              />
              <pre>
                <a href="mailto:dream.startcoder@gmail.com">
                  {" "}
                  dream.startcoder@gmail.com
                </a>
              </pre>
            </div>
            <div className="mobile_div">
              <img
                alt="Mobile"
                className="mobile_icon"
                src={process.env.PUBLIC_URL + "/mobile.png"}
              />
              <pre> +92-312-9009520</pre>
            </div>
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + "\\dsclogo.png"}
                alt="DreamStarCoder"
                title="DreamStarCoder"
                height={90}
                width={74}
              />
            </div>
          </div>
        </div>
      </div>

      <h3 className="copyright_note">
        Copyright @ 2022 DreamStarCoder (pvt) limited
      </h3>
    </Zoom>
  );
};

export default Footer;
