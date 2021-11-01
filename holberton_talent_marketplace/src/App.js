import React, { component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom';
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

import { Link } from 'react-router-dom'

function App() {
	/*
	const { isAuthenticated }= useAuth0()
*/
	const { isAuthenticated } = useAuth0()
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img src={require("./logos/Logo peque gris.PNG").default} width="50" height="30" alt="" />
						Holberton Talent Marketplace
					</Link>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item active">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link" to="/listholbies">Holbies</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link" to="/listcompanies">Companies</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link" to="/createholbie">Create Holbie</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link" to="/createcompany">Create company</Link>
							</li>
							<li class="nav-item">
								{
									isAuthenticated ? <LogoutButton /> : <LoginButton />
								}
							</li>
						</ul>
					</div>
				</div>
			</nav>
			
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
