import React from 'react'
import './App.css'
import {BrowserRouter ,Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import WebDevelopment from './components/WebDevelopmet';
import AppDevelopment from './components/AppDevelopment';
import ContactUs from './components/ContactUs';
 import "antd/dist/antd.css";
//branche 
const App = () => {
    return (
    <BrowserRouter>
      <div> 
           
        <div className='Nav-part'>
         <div className='logo'>
         <img src={process.env.PUBLIC_URL+'\\dsclogo.png'} title='DreamStarCoder'  height={150} width={124} />
         </div>
         <div className='links'>
         <ul>
          <li>
            <Link to="/" className='link' >Home</Link>
          </li>
          <li>
            <Link to="/about" className='link' >About Us</Link>
          </li>
          <li>
            <Link to="/app-development" className='link' >App Development</Link>
          </li>
          <li>
          <Link to="/web-development" className='link' >Web Development</Link>
          </li>
          <li>
            <Link to="/contact-us" className='link' >Contact Us</Link>
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
