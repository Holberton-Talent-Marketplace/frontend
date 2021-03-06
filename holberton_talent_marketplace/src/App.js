import React, { component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import FormHolbie from './components/FormHolbie';
import FormCompany from './components/FormCompany';
import FormExperience from './components/FormExperience';
import FormProjects from './components/FormProjects';
import HolbiesByTech from './components/HolbiesByTech';

import './App.css';


//components loging
import PrivateRoute from './components/PrivateRoute';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile"
import { useAuth0 } from "@auth0/auth0-react";
//components views
import Navigation from "./components/Navigation"
import ListHolbies from './components/ListHolbies'
import ListCompanies from './components/ListCompanies'
import HolbieProfile from './components/HolbieProfile'
import NewHolbie from './components/NewHolbie'
import NewCompany from './components/NewCompany'
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
						<img src={require("./logos/Logo peque gris.PNG").default} className="smallLogo" width="50" height="30" alt="" />
						Holberton Talent Marketplace
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse float-right" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/listholbies">Holbies</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/listcompanies">Companies</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/newholbie">New Holbie</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/newcompany">New Company</Link>
							</li>
							<li className="nav-item">
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
			<PrivateRoute path="/holbie_knows/:tech" component={HolbiesByTech} />
			<PrivateRoute path="/holbie_profile/:id" component={HolbieProfile} />
			<PrivateRoute path="/newholbie" component={FormHolbie} />
			<PrivateRoute path="/newcompany" component={FormCompany} />
			<Route path="/company_profile/:id" component={CompanyProfile} />


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
