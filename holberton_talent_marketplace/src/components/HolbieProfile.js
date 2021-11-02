import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../App.css';


const HolbieProfile = () => {
	const { id } = useParams()
	const [holbie, setHolbie] = useState([])
	const getHolbie = async () => {
		try {
			const response = await fetch(`http://localhost:5000/holbies/${id}`)
			const jsonData = await response.json()
			if (response.status === 400 || response.status === 404) {
				return (
					<h1>HOLBIE NOT FOUND</h1>
				)
			}
			setHolbie(jsonData)
		} catch (err) {

			console.error(err.message)
		}
	}
	useEffect(() => {
		getHolbie();
	}, [])
	console.log(holbie)
	return (
		<div class="container p-5">
			<div class="row justify-content-center">
				<div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
					<div class="card border-0 shadow">
						<img src={require("../profile_pitures/" + id + ".png").default} alt="..." />
						<div class="card-body p-1-9 p-xl-5 holbiePicture">
							<div class="mb-4">
								<h3 class="h4 mb-0">{holbie.name}</h3>
							</div>
							<h3 class="h5 mb-0">The most amazing thing:</h3>
							<p>{holbie.most_amazing_thing}</p>
							<ul class="list-unstyled mb-4">
								<li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>{holbie.location}</a></li>
							</ul>
							<ul class="social-icon-style2 ps-0">
								<li><a href={holbie.linkedin} target="_blank" rel="noopener noreferrer" class="rounded-3"><i class="fab fa-linkedin-in"></i></a></li>
								<li><a href={holbie.github} target="_blank" rel="noopener noreferrer" class="rounded-3"><i class="fab fa-github"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-7 border">
					<div class="ps-lg-1-6 ps-xl-5">
						<div class="mb-3 wow fadeIn">
							<div class="text-start mb-1-6 wow fadeIn">
								<h2 class="h1 mb-3 text-primary mt-3">About Me</h2>

							</div>
							<p>{holbie.about_me}</p>
						</div>
						<div class="mb-5 wow fadeIn">
							<div class="wow fadeIn">
								<div class="text-start mb-1-6 wow fadeIn">
									<h2 class="mb-3 mt-0 text-primary">Strengths</h2>
								</div>
								<p class="mb-4">{holbie.strengths}</p>
							</div>
							<div class="row mt-n4">
								<div class="col-sm-6 col-xl-4 mt-4">
									<div class="card text-center border-0 rounded-3">
										<div class="card-body">
											<i class="ti-bag icon-box medium rounded-3 mb-4"></i>
											<h3 class="h5 mb-3">Industries</h3>
											<p class="mb-0">{holbie.industries}</p>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-xl-4 mt-4">
									<div class="card text-center border-0 rounded-3">
										<div class="card-body">
											<i class="ti-settings icon-box large rounded-3 mb-4"></i>
											<h3 class="h5 mb-3">Technologies</h3>
											<p class="mb-0">{holbie.technologies}</p>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-xl-4 mt-4">
									<div class="card text-center border-0 rounded-3">
										<div class="card-body">
											<i class="ti-pencil-alt icon-box large rounded-3 mb-4"></i>
											<h3 class="h5 mb-3">Previous Studies</h3>
											<p class="mb-0">{holbie.previous_education}</p>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-xl-4 mt-4">
									<div class="card text-center border-0 rounded-3">
										<div class="card-body">
											<i class="ti-stats-up icon-box medium rounded-3 mb-4"></i>
											<h3 class="h5 mb-3">Skills</h3>
											<p class="mb-0">{holbie.skills}</p>
										</div>
									</div>
								</div>
								<div class="d-grid gap-2 d-md-flex justify-content-md-end">
									<button type="button" class="btn btn-primary btn-lg">Add to favorites</button>
								</div>
							</div>
						</div>
						<div class="wow fadeIn">
							<div class="text-start mb-1-6 wow fadeIn">
								<h2 class="mb-0 text-primary">Projects</h2>
							</div>
							<div class="mb-5 wow fadeIn">
								<div class="row mt-n4">
									<div class="col-sm-6 col-xl-4 mt-4">
										<div class="card text-center border-0 rounded-3">
											<div class="card-body">
												<i class="ti-briefcase icon-box large rounded-3 mb-4"></i>
												<h3 class="h5 mb-3">The Shell</h3>
												<p class="mb-0">For Holberton's first trimester final project I built a command interpreter in C, this command interpreter functions just like the built-in shell that every Unix-like operating system has.(THIS IS STATIC)</p>
												<p class="mb-0">C</p>
												<a href="#" class="rounded-3"><i class="fab ti-eye"></i> Project Link</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HolbieProfile;