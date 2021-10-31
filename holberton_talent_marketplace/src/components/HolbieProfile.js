import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router'


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
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
					<div class="card border-0 shadow">
						<img src={require("../profile_pitures/" + id + ".png").default} alt="..." />
						<div class="card-body p-1-9 p-xl-5">
							<div class="mb-4">
								<h3 class="h4 mb-0">{holbie.name}</h3>
							</div>
							<h3 class="h5 mb-0">The most amazing thing:</h3>
							<p>{holbie.most_amazing_thing}</p>
							<ul class="list-unstyled mb-4">
								<li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>Medayork, Colombia</a></li>
							</ul>
							<ul class="social-icon-style2 ps-0">
								<li>holaestoeslinkedin.com  <a href="#!" class="rounded-3"><i class="fab fa-linkedin-in"></i></a></li>
								<li>holaestoesgithub.com  <a href="#!" class="rounded-3"><i class="fab fa-github"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<div class="ps-lg-1-6 ps-xl-5">
						<div class="mb-5 wow fadeIn">
							<div class="text-start mb-1-6 wow fadeIn">
								<h2 class="h1 mb-0 text-primary">About Me</h2>
							</div>
							<p>{holbie.about_me}</p>
						</div>
						<div class="mb-5 wow fadeIn">
							<div class="text-start mb-1-6 wow fadeIn">
								<h2 class="mb-0 text-primary">Education</h2>
							</div>
							<div class="row mt-n4">
								<div class="col-sm-6 col-xl-4 mt-4">
									<div class="card text-center border-0 rounded-3">
										<div class="card-body">
											<i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
											<h3 class="h5 mb-3">Education</h3>
											<p class="mb-0">University of defgtion, fecat complete ME of synage</p>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-xl-4 mt-4">
									<div class="card text-center border-0 rounded-3">
										<div class="card-body">
											<i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
											<h3 class="h5 mb-3">Career Start</h3>
											<p class="mb-0">After complete engineer join HU Signage Ltd as a project manager</p>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-xl-4 mt-4">
									<div class="card text-center border-0 rounded-3">
										<div class="card-body">
											<i class="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
											<h3 class="h5 mb-3">Experience</h3>
											<p class="mb-0">About 20 years of experience and professional in signage</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="wow fadeIn">
							<div class="text-start mb-1-6 wow fadeIn">
								<h2 class="mb-0 text-primary">Skills</h2>
							</div>
							<p class="mb-4">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
							<div class="progress-style1">
								<div class="progress-text">
									<div class="row">
										<div class="col-6 fw-bold">Wind Turbines</div>
										<div class="col-6 text-end">70%</div>
									</div>
								</div>
								<div class="custom-progress progress rounded-3 mb-4">
									<div class="animated custom-bar progress-bar slideInLeft" style={{ "width": "70%" }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" role="progressbar"></div>
								</div>
								<div class="progress-text">
									<div class="row">
										<div class="col-6 fw-bold">Solar Panels</div>
										<div class="col-6 text-end">90%</div>
									</div>
								</div>
								<div class="custom-progress progress rounded-3 mb-4">
									<div class="animated custom-bar progress-bar bg-secondary slideInLeft" style={{ "width": "90%" }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
								</div>
								<div class="progress-text">
									<div class="row">
										<div class="col-6 fw-bold">Hybrid Energy</div>
										<div class="col-6 text-end">80%</div>
									</div>
								</div>
								<div class="custom-progress progress rounded-3">
									<div class="animated custom-bar progress-bar bg-dark slideInLeft" style={{ "width": "80%" }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
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