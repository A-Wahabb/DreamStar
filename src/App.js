import React from 'react'
import './App.css'
import {HashRouter ,NavLink, Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import WebDevelopment from './components/WebDevelopmet';
import AppDevelopment from './components/AppDevelopment';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import "antd/dist/antd.css";
import ScrollToTop from "react-scroll-to-top";
import { Bounce, Flip, Zoom } from 'react-reveal';
const App = () => {
    return (
    <HashRouter>
      <Zoom> 
        <div className='Nav-part'>

         <div className='logo'>

         <img src={process.env.PUBLIC_URL+'\\dsclogo.png'} alt='DreamStarCoder' title='DreamStarCoder'  height={60} width={50} />
         </div>
         <Bounce>
         <div className='non-mobile-links'>
         <ul>
          <li>
            <NavLink exact to="/"  activeClassName='selected' >Home</NavLink>
          </li>
          <li>
            <NavLink to="/app-development" activeClassName='selected' >App Development</NavLink>
          </li>
          <li>
          <NavLink to="/web-development" activeClassName='selected' >Web Development</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName='selected' >About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" activeClassName='selected' >Contact Us</NavLink>
          </li>

        </ul>
         </div>
         </Bounce>
       
        </div>   
       <div className='body'>
     <Routes>
          <Route  path="/"  element={ <Home />} />
          <Route path="/about" element={ <About/>   } />
          <Route path="/app-development" element={<AppDevelopment />}/>
          <Route path="/web-development" element={<WebDevelopment/>}/>
          <Route path="/contact-us" element={<ContactUs/>} />
          </Routes>  

       </div>
       <hr/>
      
      </Zoom>
      <Bounce><ScrollToTop  style={{backgroundColor:'#1890ff',borderRadius:20,}} smooth/>  </Bounce>          
        <Footer/>
        

        </HashRouter>
    )
}

export default App;
