import React from 'react'
import './App.css'
import {BrowserRouter ,Link, NavLink, Route, Switch } from 'react-router-dom'
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
         <div className='non-mobile-links'>
         <ul>
          <li>
            <NavLink exact to="/"  activeClassName='link' >Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName='link' >About Us</NavLink>
          </li>
          <li>
            <NavLink to="/app-development" activeClassName='link' >App Development</NavLink>
          </li>
          <li>
          <NavLink to="/web-development" activeClassName='link' >Web Development</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" activeClassName='link' >Contact Us</NavLink>
          </li>

        </ul>

         </div>
        

        </div>   
<<<<<<< HEAD
       
=======
>>>>>>> 550304e82b0439d4d4f952f1813090e49964c242
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
