import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link className="navbar-brand" to="/">
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
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
