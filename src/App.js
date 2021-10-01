import React from 'react'
import './App.css'
import {BrowserRouter ,Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import WebDevelopment from './components/WebDevelopmet';
import AppDevelopment from './components/AppDevelopment';
import ContactUs from './components/ContactUs';
 import dsclogo from './dsclogo.png';
 import "antd/dist/antd.css";
//branche 
const App = () => {
    return (
    <BrowserRouter>
      <div> 
           
        <div className='Nav-part'>
         <img src={dsclogo} title='DreamStarCoder'  height={80} width={90} />
         <div className='links'>
         <ul>
          <li>
            <Link to="/"  style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link>
          </li>
          <li>
            <Link to="/app-development" style={{ textDecoration: 'none' }}>App Development</Link>
          </li>
          <li>
          <Link to="/web-development" style={{ textDecoration: 'none' }}>Web Development</Link>
          </li>
          <li>
            <Link to="/contact-us" style={{ textDecoration: 'none' }}>Contact Us</Link>
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
      </div>
       
       
       
        </BrowserRouter>
        
    )
}

export default App;
