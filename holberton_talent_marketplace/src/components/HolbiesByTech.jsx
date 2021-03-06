import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../App.css';
import { Link } from 'react-router-dom'


const HolbiesByTech = () => {
    function toTags(string) {
        let noDots = string.split('.').join("");
        let tags = noDots.split(', ')
        return tags
    }
    const { tech } = useParams()
    const [holbies, setHolbies] = useState([])
    function filterHolbies(obj, tech) {
        let holbiesWithTech = []
        for (const element of obj) {
            if (element["technologies"].includes(tech)) {
                holbiesWithTech.push(element)
            }
        }
        return holbiesWithTech
    }
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
    const filteredHolbies = filterHolbies(holbies, tech)
    console.log(filteredHolbies)
    return (
        <div className="container p-5">
            <section>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-11">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            {filteredHolbies.map(holbie => (
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
export default HolbiesByTech;