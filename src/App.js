import React from 'react'
import './App.css'
import {BrowserRouter ,Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import WebDevelopment from './components/WebDevelopmet';
import AppDevelopment from './components/AppDevelopment';
import ContactUs from './components/ContactUs';

//branche 
const App = () => {
    return (
        
    <BrowserRouter>
    <div className='main'>
        <div className='Nav-part'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/app-development">App Development</Link>
          </li>
          <li>
          <Link to="/web-development">Web Development</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>

        </ul>

        </div>
       </div>      
        

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
        </BrowserRouter>
    )
}

export default App;
