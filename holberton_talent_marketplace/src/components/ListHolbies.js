import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListHolbies = () => {
	/*function selectedColumns(columns) {
		const desiredRows = ["gender", "name", "about_me", "location", "technologies"]
		const selectedRows = []
		for (const [key, value] of Object.entries(columns)) {
			console.log(`${key}: ${value}`);
		  }
		for (const element of columns) {
			if (element in desiredRows) {
				console.log("CUMPLIÓ")
				selectedRows.push(element)
			}
		}
		console.log(selectedRows)
	}*/
	const [q, setQ] = useState("");
	const [searchColumns, setSearchColumns] = useState([
		'technologies'

	]);
	function toTags(string) {
		let noDots = string.split('.').join("");
		let tags = noDots.split(', ')
		return tags
	}
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
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const wantedColumns = ['gender', 'name', 'technologies', 'about_me', 'skills']
	return (
		<div className="container p-3">
			<section>
				<div class="row">
					<div class="col-1"></div>
					<div class="col-11">
						<h1 className="text-center mt-5 mb-5">Find A Holbie</h1>
						<form className="mb-3">
							<input type="text" className="form-control form-control-sm mt-3" placeholder="Name, technologies..." value={q} onChange={(e) => setQ(e.target.value)}></input>
							{wantedColumns &&
								wantedColumns.map((column) => (
									<label className="px-2">
										<div className="mt-4">
											<input
												className="form-check-input pl-3"
												type='checkbox'
												checked={searchColumns.includes(column)}
												onChange={(e) => {
													const checked = searchColumns.includes(column);
													setSearchColumns((prev) =>
														checked
															? prev.filter((sc) => sc !== column)
															: [...prev, column],
													);
												}}
											/>
											{column === "about_me" ?
											capitalizeFirstLetter(column).replace("_", " ")
											:
											capitalizeFirstLetter(column)
										}
										</div>
									</label>
								))}
						</form>
						<div class="row row-cols-1 row-cols-md-4 g-4">
							{search(holbies).slice(0, 16).map(holbie => (
								<div class="col">
									<div class="card h-100">

										<img src={require("../profile_pitures/" + holbie.id + ".png").default} class="card-img-top" alt="..." />
										<div class="card-body">
											<ul class="list-group list-group-alaing">
												<h5 class="card-title">{holbie.name}</h5><br />
												<h6 class="card-subtitle mb-2 text-muted">Gender</h6>
												<p class="card-text">{holbie.gender}</p><br />
												<h6 class="card-subtitle mb-2 text-muted">About me</h6>
												<p class="card-text">{holbie.about_me}</p><br />
												<h6 class="card-subtitle mb-2 text-muted">Location</h6>
												<p class="card-text">{holbie.location}</p><br />
												<h6 class="card-subtitle mb-2 text-muted">Strengths</h6>
												<p class="card-text">{holbie.strengths}</p><br />
												<h6 class="card-subtitle mb-2 text-muted">Skills</h6>
												<p class="card-text">{holbie.skills}</p><br />
												<h6 class="card-subtitle mb-2 text-muted">Most amazing thing</h6>
												<p class="card-text">{holbie.most_amazing_thing}</p><br />
												<h6 class="card-subtitle mb-2 text-muted">Technologies</h6>
												<p class="card-text">{toTags(holbie.technologies).map(tag => (
													<Link to={`/holbie_knows/${tag}`} style={{ textDecoration: 'none', color: 'black' }}>
														<span className="tag">{tag}</span>
													</Link>
												))}</p><br />
												<h6 class="card-subtitle mb-2 text-muted">Previous education</h6>
												<p class="card-text">{holbie.previous_education}</p><br />
											</ul>
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