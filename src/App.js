import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppDevelopment from './Components/pages/AppDevelopment';
import Home from './Components/pages/Home';
import AboutUs from './Components/pages/AboutUs';
import WebDevelopment from './Components/pages/WebDevelopment';
import Contact from './Components/pages/Contact';


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
