import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	const [holbies, setHolbies] = useState([])
	const getHolbies = async () => {
		try {
			const response = await fetch("http://localhost:5000/holbies")
			const jsonData = await response.json()
			setHolbies(jsonData)
		} catch (err) {
			console.error(err.message)
		}
	}
	useEffect(() => {
		getHolbies();
	}, [])
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
						{holbies.slice(0, 3).map(holbie => (
							<div class="col">
								<div class="card h-100">
									<img src={require("../profile_pitures/" + holbie.id + ".png").default} class="card-img-top" alt="..." width="80" height="210" />
									<div class="card-body">
										<h5 class="card-title">{holbie.name}</h5>
										<p class="card-text">{holbie.about_me.substring(0, 89) + "..."}</p>
									</div>
									<div class="card-footer">
										<small class="text-muted">{holbie.technologies.substring(0, 27) + "..."}</small>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div >
	)
}

export default Home;
