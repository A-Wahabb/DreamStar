import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppDevelopment from './pages/AppDevelopment';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WebDevelopment from './pages/WebDevelopment';
import  Navbar  from "./components/navbar/index.js";
import Contact from './pages/Contact';



function App() {
return (
	<Router>
    <Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={AboutUs} />
		<Route path='/appdevelopment' component={AppDevelopment} />
		<Route path='/webdevelopment' component={WebDevelopment} />
		<Route path='/contactus' component={Contact} />
	</Switch>
	</Router>
);
}

export default App;
