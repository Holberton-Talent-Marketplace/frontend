// import React, { Fragment, useEffect, useState } from "react";
// import { Link } from 'react-router-dom'


// const ListHolbies = () => {
// 	const [q, setQ] = useState("");
// 	const [holbies, setHolbies] = useState([])
// 	const [searchColumns, setSearchColumns] = useState([
// 		'name',
// 		'gender',
// 		'technologies',
// 		'about_me',
// 		'most_amazing_thing'
// 	]);
// 	const getHolbies = async () => {
// 		try {
// 			const response = await fetch("http://localhost:5000/holbies")
// 			const jsonData = await response.json()
// 			setHolbies(jsonData)
// 		} catch (err) {
// 			console.error(err.message)
// 		}
// 	}
// 	useEffect(() => {
// 		getHolbies();
// 	}, [])

// 	function search(rows) {
// 		return rows.filter((row) =>
// 			searchColumns.some(
// 				(column) =>
// 					row[column]
// 						.toString()
// 						.toLowerCase()
// 						.indexOf(q.toLowerCase()) > -1,
// 			),
// 		);
// 	}
// 	function setImage(holbieId) {
// 		try {
// 			return require("../profile_pitures/" + holbieId + ".png")
// 		} catch (error) {
// 			return require("../profile_pitures/default_avatar.jpg")
// 		}
// 	}
// 	const columns = holbies[0] && Object.keys(holbies[0]);
// 	return <Fragment>
// 		<div class="container-fluid">
// 			<div class="row">
// 			<div class="col-3"></div>
// 			<div class="col-7">
// 					<h1 className="text-center mt-5">Find A Holbie</h1>
// 					<form>
// 						<input type="text" className="form-control form-control-sm mt-5" placeholder="Name, technologies, gender" value={q} onChange={(e) => setQ(e.target.value)}></input>
// 					</form>
// 					<section class="section about-section gray-bg" id="about">
// 						<div class="container border">
// 							{search(holbies).map(holbie => (
// 								<Link to={`/holbie_profile/${holbie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
// 									<div class="flex-row-reverse border-bottom border-top">
// 										<div class="">
// 											<div class="about-text go-to">
// 												<img src={require("../profile_pitures/" + holbie.id + ".png").default} class="profilePicture img-thumbnail rounded float-end" width="100" height="100" onError={(e) => {
// 													e.target.src = '../profile_pictures/default_avatar.jpg' // some replacement image
// 												}} />
// 												<h3 class="dark-color mt-4">{holbie.name}</h3>
// 												<p>{holbie.about_me.substring(0, 200) + "..."}</p>
// 											</div>
// 											<div class="about-text go-to">
// 												<h4 class="dark-color">Technologies</h4>
// 												<p>{holbie.technologies}</p>
// 											</div>
// 											<div class="about-text go-to">
// 												<h4 class="dark-color">The most amazing thing</h4>
// 												<p>{holbie.most_amazing_thing}</p>
// 											</div>
// 											<div class="about-text go-to">
// 												<h4 class="dark-color">Gender</h4>
// 												<p>{holbie.gender}</p>
// 											</div>
// 										</div>
// 									</div>
// 								</Link>
// 							))}
// 						</div>
// 					</section>
// 				</div>
// 				<div class="col-6"></div>
// 			</div>
// 		</div>
// 	</Fragment>

// }

// export default ListHolbies;
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