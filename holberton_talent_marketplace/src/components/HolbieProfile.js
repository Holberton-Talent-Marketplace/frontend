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
	return (
		<div class="container">
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
				<div class="col-lg-8 border">
					<div class="ps-lg-1-6 ps-xl-5">
						<div class="mb-3 wow fadeIn">
							<div class="text-start mb-1-6 wow fadeIn">
								<h2 class="h1 mb-3 text-primary mt-3">About Me</h2>
							</div>
							<p>{holbie.about_me}</p>
						</div>
						<div class="mb-5 wow fadeIn border-bottom">
							<div class="wow fadeIn border-bottom">
								<div class="text-start mb-1-6 wow fadeIn">
									<h2 class="mb-3 mt-0 text-primary">Strengths</h2>
								</div>
								<p class="mb-4">{holbie.strengths}</p>
							</div>
							<div class="row mt-n4 align-items-center">
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
											<i class="icon-box large rounded-3 mb-4"></i>
											<h3 class="h5 mb-3"></h3>
											<p class="mb-0"></p>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-xl-4 mt-4 align-items-center">
									<div class="card text-center border-0 rounded-3">
										<div class="card-body">
											<i class="ti-stats-up icon-box medium rounded-3 mb-4"></i>
											<h3 class="h5 mb-3">Skills</h3>
											<p class="mb-0">{holbie.skills}</p>
										</div>
									</div>
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
											{
												holbie.projects &&
													typeof holbie.projects === "object" &&
													holbie.projects.length ?
													holbie.projects.map((project) =>
														<div class="card-body">
															<i class="ti-briefcase icon-box large rounded-3 mb-4"></i>
															<h3 class="h5 mb-3">{project.name}</h3>
															<p class="mb-0">{project.description}</p>
															<b><p class="mb-0">{project.technologiesUsed}</p></b>
															<a href={project.linkToProject} target="_blank" rel="noopener noreferrer" class="rounded-3"><i class="fab ti-eye"></i> Project Link</a>
														</div>
													)
													:
													<p>No projects listed for this entry.</p>
											}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="wow fadeIn">
							<div class="text-start mb-1-6 wow fadeIn">
								<h2 class="mb-0 text-primary">Experiences</h2>
							</div>
							<div class="mb-5 wow fadeIn">
								<div class="row mt-n4">
									<div class="col-sm-6 col-xl-4 mt-4">
										<div class="card text-center border-0 rounded-3">
											{
												holbie.experiences &&
													typeof holbie.experiences === "object" &&
													holbie.experiences.length ?
													holbie.experiences.map((experience) =>
														<div class="card-body">
															<i class="ti-check-box icon-box large rounded-3 mb-4"></i>
															<h3 class="h5 mb-3">{experience.name} at {experience.companyName}</h3>
															<p class="mb-0">{experience.description}</p>
														</div>
													)
													:
													<p>No experiences listed for this entry.</p>
											}
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