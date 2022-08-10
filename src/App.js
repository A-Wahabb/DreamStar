import React from 'react'
import './App.css'
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import WebDevelopment from './components/WebDevelopmet';
import AppDevelopment from './components/AppDevelopment';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import "antd/dist/antd.css";
import ScrollToTop from "react-scroll-to-top";
import { Bounce, Zoom } from 'react-reveal';
const App = () => {
  return (
    <HashRouter>
      <Zoom>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">

              <img src={process.env.PUBLIC_URL + '\\dsclogo.png'} alt='DreamStarCoder' title='DreamStarCoder' height={60} width={50} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link py-2 px-3" activeClassName='selected' >Home</NavLink>
                  {/* <a aria-current="page" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                  <NavLink to="/what-we-dot" className="nav-link py-2 px-3" activeClassName='selected' >What we Do</NavLink>
                  {/* <a className="nav-link py-2 px-3" href="#">Features</a> */}
                </li>
                {/* <li className="nav-item">
                  <NavLink to="/web-development" className="nav-link py-2 px-3" activeClassName='selected' >Web Development</NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link py-2 px-3 " activeClassName='selected' >About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact-us" className="nav-link py-2 px-3 " activeClassName='selected' >Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className='Nav-part'>

          <div className='logo'>

            <img src={process.env.PUBLIC_URL + '\\dsclogo.png'} alt='DreamStarCoder' title='DreamStarCoder' height={60} width={50} />
          </div>
          <Bounce>
            <div className='non-mobile-links'>
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName='selected' >Home</NavLink>
                </li>
                <li>
                  <NavLink to="/what-we-dot" activeClassName='selected' >App Development</NavLink>
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

        </div> */}
        <div className='body'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-dot" element={<AppDevelopment />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>

        </div>
        <hr />

      </Zoom>
      <Bounce><ScrollToTop style={{ backgroundColor: '#1890ff', borderRadius: 20, }} smooth />  </Bounce>
      <Footer />


    </HashRouter>
  )
}

export default App;
