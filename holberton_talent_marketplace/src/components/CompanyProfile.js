import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../App.css';

const CompanyProfile = () => {
	const { id } = useParams()
	const [company, setCompany] = useState([])
	const [error, setError] = useState([])
	const getCompany = async () => {
		try {
			const response = await fetch(`http://localhost:5000/companies/${id}`)
			const jsonData = await response.json()
			if (response.status === 400 || response.status === 404) {
				return (
					<h1>COMPANY NOT FOUND</h1>
				)
			}
			console.log(jsonData)
			setCompany(jsonData)
		} catch (err) {
			setError(err)
			console.error(err.message)
		}
	}
	useEffect(() => {
		getCompany();
	}, [])
	return (
		<div>
			{
				company &&
					typeof company === "object" &&
					company.length != 0 ?
					<div class="container p-5">
						<div class="row justify-content-center">
							<div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
								<div class="card border-0 shadow">
									<img src={require("../profile_pitures/" + id + ".png").default} alt="..." />
									<div class="card-body p-1-9 p-xl-5 holbiePicture">
										<div class="mb-4">
											<h3 class="h4 mb-0">{company.name}</h3>
										</div>
										<h3 class="h5 mb-0">About Us</h3>
										<p>{company.about_us}</p>
										<h3 class="h5 mb-0">Technologies</h3>
										<p>{company.technologies}</p>
										<ul class="list-unstyled mb-4">
											<li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>{company.location}</a></li>
										</ul>
										<ul class="social-icon-style2 ps-0">
											<li><a href={company.contact_link} target="_blank" rel="noopener noreferrer" class="rounded-3"><i class="ti-link"></i>  Contact Us</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-lg-7 border">
								<div class="ps-lg-1-6 ps-xl-5">
									<div class="mb-3 wow fadeIn">
										<div class="text-start mb-1-6 wow fadeIn">
											<h2 class="h2 mb-3 text-primary mt-3">Capstone Projects</h2>
										</div>
										{
											company.capstone_projects &&
												typeof company.capstone_projects === "object" &&
												company.capstone_projects ?
												company.capstone_projects.map((capstoneProject) =>
													<div class="card-body border">
														<h3 class="h5 mb-3">{capstoneProject.name}</h3>
														<p class="mb-0">{capstoneProject.description}</p>
														<b><p class="mb-0">{capstoneProject.technologies}</p></b>
														<p class="mb-0">Cohort: {capstoneProject.holbiesCohort}</p>
														<p class="mb-0">holbies relation not available yet</p>
														<a href="#" target="_blank" rel="noopener noreferrer" class="rounded-3"><i class="fab ti-eye"></i> Project Link</a>
													</div>
												)
												:
												<p>No capstone projects listed for this entry.</p>
										}
									</div>
								</div>
							</div>
						</div>
					</div>
					:
					<div className="container">
						<h1>COMPANY NOT FOUND</h1>
					</div>
			}
		</div>
	)

}

export default CompanyProfile;