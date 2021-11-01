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
					<div class="col">
						<img src={require("../logos/HolbertonTalent_logo_S.PNG").default} />
					</div>
					<div class="col">
						<Link to="/listholbies"><button type="button" class="btn btn-primary btn-lg">Browse Holbies</button>
						</Link>
						<br />
						<Link to="/listcompanies"><button type="button" class="btn btn-secondary btn-lg">Browse Companies</button>
						</Link>
					</div>
					<div class="">
						<div class="row row-cols-1 row-cols-md-3 g-4">
							<div class="col">
								<div class="card h-100">
									<img src={require("../profile_pitures/9a9c1e47-8114-4ecb-8aea-4f2230e253b7.png").default} class="card-img-top" alt="..."/>
									<div class ="card-body">
									<h5 class ="card-title">Martha Liliana Sepulveda Lindarte</h5>
									<p class ="card-text">Fullstack software engineer student passionate about expanding my knowledge and using logical thinking to solve technological challenges and integrate different technologies..</p>
									</div>
									<div class ="card-footer">
									<small class ="text-muted">Last updated 3 mins ago</small>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card h-100">
									<img src={require("../profile_pitures/3a46678e-e1d7-46b1-bede-8bccc7cf30cb.png").default} class="card-img-top" alt="..."/>
									<div class ="card-body">
									<h5 class ="card-title">Card title</h5>
									<p class ="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
									</div>
									<div class ="card-footer">
									<small class ="text-muted">Last updated 3 mins ago</small>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card h-100">
									<img src={require("../profile_pitures/bff8f1da-f1c0-4812-b631-c55d9ed818e3.png").default} class="card-img-top" alt="..."/>
									<div class ="card-body">
									<h5 class ="card-title">Card title</h5>
									<p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
									</div>
									<div class ="card-footer">
									<small class ="text-muted">Last updated 3 mins ago</small>
									</div>
								</div>
							</div>
						</div>



					</div>
					
				</div>
			</div>
			
		)
	}
}
