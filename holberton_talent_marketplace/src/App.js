import React, { component } from 'react';
import { BrowserRouter as Router , Route, link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';


//components loging
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile"
import { useAuth0 } from "@auth0/auth0-react";
//components views
import Navigation from "./components/Navigation"
import ListHolbies from './components/ListHolbies'
import ListCompanies from './components/ListCompanies'
import HolbieProfile from './components/HolbieProfile'
import CreateHolbie from './components/CreateHolbie'
import CreateCompany from './components/CreateCompany'
import CompanyProfile from './components/CompanyProfile'
import Home from './components/Home'



function App() {
	/*
	const { isAuthenticated }= useAuth0()
*/
	const { isAuthenticated }= useAuth0()
	return (
		<Router>
			<Navigation/>
			{
			isAuthenticated ? <LogoutButton/> : <LoginButton/>
			}
			<Profile/>
			<Route exact path="/" component={Home} />
			<Route path="/listholbies" component={ListHolbies} />
			<Route path="/listcompanies" component={ListCompanies} />
			<Route path="/profileholbie/:id" component={HolbieProfile} />
			<Route path="/createholbie" component={CreateHolbie} />
			<Route path="/createcompany" component={CreateCompany} />
			<Route path="/profilecompany/:id" component={CompanyProfile} />


		</Router>

/*
	<div className="App">
		<h1>Holberton Talent Marketplace</h1>
		{
			isAuthenticated ? <LogoutButton/> : <LoginButton/>
		}
		<Profile/>
    </div>
*/
  );
};

export default App;
