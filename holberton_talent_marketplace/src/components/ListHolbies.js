import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListHolbies = () => {
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
			<section>
				<div class="row">
					<div class="col-1"></div>
					<div class="col-11">
						<div class="row row-cols-1 row-cols-md-4 g-4">
							{holbies.slice(0, 16).map(holbie => (
								<div class="col">
									<div class="card h-100">

										<img src={require("../profile_pitures/" + holbie.id + ".png").default} class="card-img-top" alt="..." />
										<div class="card-body">
											<h5 class="card-title">{holbie.name}</h5>
											<h6 class="card-title">Gender</h6>
											<p class="card-text">{holbie.gender}</p>
											<h6 class="card-title">About me</h6>
											<p class="card-text">{holbie.about_me.substring(0, 89) + "..."}</p>
											<h6 class="card-title">Location</h6>
											<p class="card-text">{holbie.location}</p>
											<h6 class="card-title">strengths</h6>
											<p class="card-text">{holbie.strengths}</p>
											<h6 class="card-title">Skills</h6>
											{/* <p class="card-text">{holbie.skills}</p> */}
											<h6 class="card-title">Most amazing thing</h6>
											{/* <p class="card-text">{holbie.most_amazing_thing.substring(0, 89) + "..."}</p> */}
											<h6 class="card-title">Technologies</h6>
											<p class="card-text">{holbie.technologies.substring(0, 27) + "..."}</p>
											<h6 class="card-title">Previous education</h6>
											{/* <p class="card-text">{holbie.previous_education}</p> */}
										</div>

										<div class="card-footer">
											<div class="text-center">
												<small class="text-muted"><Link to={`/holbie_profile/${holbie.id}`} class="btn btn-primary">View Full profile</Link></small>
											</div>
										</div>
									</div>

								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
export default ListHolbies;