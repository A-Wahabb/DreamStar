import React from 'react'
import './App.css'
import {HashRouter ,NavLink, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import WebDevelopment from './components/WebDevelopmet';
import AppDevelopment from './components/AppDevelopment';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
 import "antd/dist/antd.css";
import ScrollToTop from "./scroll";
import { Zoom } from 'react-reveal';
//branche 
const App = () => {
    return (
    <HashRouter>
      <Zoom> 
       <ScrollToTop />
        <div className='Nav-part'>
         <div className='logo'>
        
         <img src={process.env.PUBLIC_URL+'\\dsclogo.png'} alt='DreamStarCoder' title='DreamStarCoder'  height={110} width={100} />
         </div>
         <div className='non-mobile-links'>
         <ul>
          <li>
            <NavLink exact to="/"  activeClassName='link' >Home</NavLink>
          </li>
          <li>
            <NavLink to="/app-development" activeClassName='link' >App Development</NavLink>
          </li>
          <li>
          <NavLink to="/web-development" activeClassName='link' >Web Development</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName='link' >About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" activeClassName='link' >Contact Us</NavLink>
          </li>

        </ul>
         </div>
        </div>   
       <div className='body'>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
           <About/>   
          </Route>
          <Route path="/app-development">
              <AppDevelopment />
          </Route>
          <Route path="/web-development">
              <WebDevelopment/>
          </Route>
          <Route path="/contact-us">
              <ContactUs/>
          </Route>
        </Switch>

       </div>
       <hr/>
                          
        <Footer/>
      </Zoom>
        </HashRouter>
        
    )
}

export default App;
