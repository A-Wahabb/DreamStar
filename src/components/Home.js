import React from "react";
import './home.css';
import IOS_1 from "../Assets/Image/IOS_1.png";
import IOS_2 from "../Assets/Image/IOS_2.png";
import IOS_3 from "../Assets/Image/IOS_3.png";
import IOS_4 from "../Assets/Image/IOS_4.png";
import Android_1 from "../Assets/Image/Android_1.png";
import Android_2 from "../Assets/Image/Android_2.png";
import Android_3 from "../Assets/Image/Android_3.png";
import Web_1 from "../Assets/Image/Web_1.png";
import Web_2 from "../Assets/Image/Web_2.png";
import Web_3 from "../Assets/Image/Web_3.png";
import Web_4 from "../Assets/Image/Web_4.png";
import Game_1 from "../Assets/Image/Game_1.png";
import Game_2 from "../Assets/Image/Game_2.png";
import Game_3 from "../Assets/Image/Game_3.png";
import Game_4 from "../Assets/Image/Game_4.png";

import { Bounce, Rotate, Zoom } from "react-reveal";

import { NavLink } from "react-router-dom";
import ServiceListing from "../Atoms/ServiceListing";
const Home = () => {
    // let navigate = useNavigate()
    return (
        <>
            <div id="A">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 py-5 my-5" >
                            <p className="tc-plum fw-700 fs22">Welcome to</p>
                            <p className="tc-plum fw-700 fs50" >DreamStar Coder</p>
                            <p className="tc-plum fw-700 fs20" >We develop innovative, creative,and robust
                                software solutions for mobile and web
                                platforms. Lets Build Something Great.</p>
                        </div>
                        <div className="col-md-7">
                            <img src="https://yumyapps.com/img/banner_img_right.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="B" class="wavy">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-7">
                            <Rotate top left>
                                <img src="https://yumyapps.com/img/about_imt-01.png" alt="img" />
                            </Rotate>
                        </div>
                        <div className="col-md-5 py-5 my-5" >
                            <Rotate bottom right>
                                <p className="tc-plum fw-700 fs22 banner_small position-relative">About US</p>
                                <p className="tc-plum fw-700 fs20" >We Provide Dynamic Web Development Services With The Latest Development Tools And Stacks From Planing To Deployment With Full Agility</p>
                                <NavLink to="/about">
                                    <button className="tc-plum brdr-plum px-3 py-2 bg-white fw-700">Read More</button>
                                </NavLink>
                            </Rotate>

                        </div>
                    </div>
                </div>
            </div>
            <div id="C" class="wavy Third">
                <div className="container py-5">
                    <div className="row">
                        <p className="text-white fw-700 fs22 text-center">Services</p>
                        <p className="text-white fw-500 fs24 text-center" >What We Provide</p>
                        <p className="text-white fw-500 fs20 text-center" >Our team of experienced developers, designers, testers, and project managers implements projectmanagement standards to deliver solutions across the board.</p>

                        <ServiceListing
                            Service_logo="https://yumyapps.com/img/icon-bubble.png"
                            Headline="iOS App Development"
                            Details="We create native iOS applications that deliver functionality and usability by fully optimizing the Apple development platform."
                            Imag_1={IOS_1}
                            Imag_2={IOS_2}
                            Imag_3={IOS_3}
                            Imag_4={IOS_4}
                        />

                        <ServiceListing
                            Service_logo="	https://yumyapps.com/img/icon-knobs.png"
                            Headline="Android App Development"
                            Details="Our Android applications solve complex problems through 
                            user-friendly and state-of-the-art solutions built on the Android 
                            SDK."
                            Imag_1={Android_1}
                            Imag_2={Android_2}
                            Imag_3={IOS_3}
                            Imag_4={Android_3}
                        />
                        <ServiceListing
                            Service_logo="https://yumyapps.com/img/icon-heart.png"
                            Headline="Web Development"
                            Details="Whether it’s a website to showcase your brand or a web application that delivers your bottom line, we .implement web based solutions across the board."
                            Imag_1={Web_1}
                            Imag_2={Web_2}
                            Imag_3={Web_3}
                            Imag_4={Web_4}
                        />
                        <ServiceListing
                            Service_logo="https://yumyapps.com/img/icon-games.png"
                            Headline="Game Development"
                            Details="We build cross-platform games for casual, action, RPG, MMORPG, and social gamers. From conceptualization to illustration and development, we cover all bases."
                            Imag_1={Game_1}
                            Imag_2={Game_2}
                            Imag_3={Game_3}
                            Imag_4={Game_4}
                        />

                        <NavLink to="/what-we-do" className="pt-3 text-center">
                            <button className="tc-plum brdr-plum px-3 py-2 bg-white fw-700">Read More</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className='home'>

                    <Zoom>
                        <img alt='DreamStarCoder' className='contentStyle' src={process.env.PUBLIC_URL + '/splashscreen.svg'} />
                    </Zoom>
                    <Zoom>
                        <img alt='UI&UX' className='contentStyle' src={process.env.PUBLIC_URL + '/uiux.svg'} />
                    </Zoom>
                    <Zoom>
                        <img alt='AppDevelopment' className='contentStyle' src={process.env.PUBLIC_URL + '/webdevelopment.svg'} />
                    </Zoom>
                    <Zoom>
                        <img alt='WebDevelopment' className='contentStyle' src={process.env.PUBLIC_URL + '/appdevelopment.svg'} />
                    </Zoom>
                    <br />
                    <div>
                        <h1 className='firstheading'>
                            Welcome to the dreamStarCoder
                        </h1>
                    </div>
                    <div className='home_content'>
                        <p>
                            DreamStarCoder is a software company that provides services by converting your ideas into
                            a solid. Product along respecting the standardized life cycle and ethics of the softawre community.
                            Our team would cpnvert your ideas into a market-competitive product and lead your business high up to the sky.

                        </p>
                        <div className='readmorediv'>
                        <button className='rdmbtn' onClick={()=>{
                            navigate('/about',{
                                replace:true
                            })
                        }}>Read more</button></div>
                    </div>
                    <div className='webmobAppdlp'>
                        <h2 className='webmobAppdlp_heading'>web & mobile Application development</h2>
                        <p className='webmobAppdlp_peragrf'>
                            We deliver an incredible mobile experience with native ios and android apps and when it comes
                            to a cross-platform solution, Our expertise and technology provide a good balance between
                            development efficiency and the performance and feel of a native application. We also build
                            react applications that are efficient, and easy to maintain.
                        </p>
                        <div className='rdmdiv'>
                        <button className='rdmbtn' onClick={()=>{
                            navigate('/web-development',{
                                replace:true
                            })
                        }} >read more</button></div>
                    </div>

                    <Bounce className="ourpartnersmaindiv">
                        <span>
                            <h1 className='headingourpartners'>our trusted partners</h1>
                        </span>
                        <div className="our_trasted_partners_icons">
                            <span>
                                <img className="our_trasted_partners_icons_syle_one" src={process.env.PUBLIC_URL + '/guesttwo.png'} alt="Guesstwo Icon" />
                                <img className="our_trasted_partners_icons_syle_two" src={process.env.PUBLIC_URL + '/wirelessmerch.png'} alt="Wirelessmerch Icon" />
                            </span>
                        </div>
                    </Bounce>
                </div>
            </div> */}
        </>
    )
}
export default Home
