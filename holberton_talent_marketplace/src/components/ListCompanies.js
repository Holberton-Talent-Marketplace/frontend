import React, { Component, Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListCompanies = () => {
	const [q, setQ] = useState("");
	const [companies, setCompanies] = useState([])
	const [searchColumns, setSearchColumns] = useState([
		'name',
		'technologies',
		'about_us',
		'location'
	]);
	const getCompanies = async () => {
		try {
			const response = await fetch("http://localhost:5000/companies")
			const jsonData = await response.json()
			setCompanies(jsonData)
			console.log(companies)
		} catch (err) {
			console.error(err.message)
		}
	}
	useEffect(() => {
		getCompanies();
	}, [])

	function search(rows) {
		return rows.filter((row) =>
			searchColumns.some(
				(column) =>
					row[column]
						.toString()
						.toLowerCase()
						.indexOf(q.toLowerCase()) > -1,
			),
		);
	}
	return (
		<Fragment>
			<div class="container-fluid">
				<div class="row">
					<div class="col-3"></div>
					<div class="col-7">
						<h1 className="text-center mt-5">Find A Company</h1>
						<form>
							<input type="text" className="form-control form-control-sm mt-5" placeholder="Name, technologies, location" value={q} onChange={(e) => setQ(e.target.value)}></input>
						</form>
						<section class="section about-section gray-bg" id="about">
							<div class="container border">
								{search(companies).map(company => (
									<Link to={`/company_profile/${company.id}`} style={{ textDecoration: 'none', color: 'black' }}>
										<div class="flex-row-reverse border-bottom border-top">
											<div class="">
												<div class="about-text go-to">
													<img src={require("../profile_pitures/" + company.id + ".png").default} class="profilePictureCompany img-thumbnail rounded float-end" width="200" height="200" onError={(e) => {
														e.target.src = '../profile_pictures/default_avatar.jpg' // some replacement image
													}} />
													<h3 class="dark-color mt-4">{company.name}</h3>
													<p>{company.about_us.substring(0, 200) + "..."}</p>
												</div>
												<div class="about-text go-to">
													<h4 class="dark-color">Technologies</h4>
													<p>{company.technologies}</p>
												</div>
												<div class="about-text go-to">
													<h4 class="dark-color">Location</h4>
													<p>{company.location}</p>
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</section>
					</div>
					<div class="col-6"></div>
				</div>
			</div>
		</Fragment>
	)

}

export default ListCompanies;
