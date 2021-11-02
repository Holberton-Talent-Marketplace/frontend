import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
	render() {
		return (
			<div className="container p-5">
				<div class="row row-cols-2">
					<div class="col"><h1 className="title">Matchmaking between Holberton Capstone + Techstars Startups</h1>
						<p>Companies can submit their capstone projects, participants can ask questions, and matches can be made.
							Holberton Talent Marketplace is a directory of Holberton talent that companies can hire directly even after the capstone project.
							<br />
							Techstars invests in 500 companies per year, and we are growing to 5000 companies per year.
							Not all companies are hiring during the 13-week acceleration program, but many hire afterward.
							Techstars Boulder is only 12 companies per year and initially, Holberton worked primarily with
							Techstars Boulder companies. Now more companies from other programs and after the program want to work with Holberton participants.
						</p>
					</div>
					<div class="col-6 p-5">
						<img src={require("../logos/HolbertonTalent_logo_S.PNG").default} />
					</div>
					<div class="col-6">
						<div class="p-3 bg"></div>
						<Link to="/listholbies"><button type="button" class="btn btn-primary btn-lg">Browse Holbies</button></Link>
						<div class="p-3 bg"></div>
						<Link to="/listcompanies"><button type="button" class="btn btn-secondary btn-lg">Browse Companies</button></Link>
						<div class="p-5 bg">
							<center>
							<h3><strong><em>"Find the talent you are looking for"</em></strong></h3>
							</center>
						</div>
					</div>
					<div class="col">
						
						<div class="row row-cols-1 row-cols-md-3 g-4">
							<div class="col">
								<div class="card h-100">
									<img src={require("../profile_pitures/9a9c1e47-8114-4ecb-8aea-4f2230e253b7.png").default} class="card-img-top" alt="..." width="80" height="210" />
									<div class="card-body">
										<h5 class="card-title">Liliana Sepulveda Lindarte</h5>
										<p class="card-text">Fullstack software engineer, passionate about learning, technology, science and traveling.</p>
									</div>
									<div class="card-footer">
										<small class="text-muted">Reactjs, Javascrip, Unity, Phyton</small>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card h-100">
									<img src={require("../profile_pitures/9ac55636-db8d-43ea-a3bb-c5711f7d10b0.png").default} class="card-img-top" alt="..." width="80" height="210"/>
									<div class="card-body">
										<h5 class="card-title">Camilo Andrés Morales</h5>
										<p class="card-text">Full Stack Software Engineer. Skilled primarily on frontend technologies and Experienced in cloud tools from AWS.</p>
									</div>
									<div class="card-footer">
										<small class="text-muted">Reactjs, Bootstrap, Nodejs and Django</small>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card h-100">
									<img src={require("../profile_pitures/3a46678e-e1d7-46b1-bede-8bccc7cf30cb.png").default} class="card-img-top" alt="..." width="80" height="210" />
									<div class="card-body">
										<h5 class="card-title">Juan Camilo Cadavid </h5>
										<p class="card-text">I enjoy materializing my ideas through software. I'm planning on specializing in Machine Learning.</p>
									</div>
									<div class="card-footer">
										<small class="text-muted">Nodejs, C, Python, JavaScript</small>
									</div>
								</div>
							</div>
						</div>



					</div>

				</div>
			</div >

		)
	}
}
