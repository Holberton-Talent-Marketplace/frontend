import React, { Fragment, useEffect, useState } from "react";

const ListHolbies = () => {
    const [q, setQ] = useState("");
    const [holbies, setHolbies] = useState([])
    const [searchColumns, setSearchColumns] = useState([
        'name',
        'gender',
        'technologies',
        'about_me',
        'most_amazing_thing'
    ]);
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

    const columns = holbies[0] && Object.keys(holbies[0]);
    console.log(columns)
    return <Fragment>
        <h1 className="text-center mt-5">Find A Holbie</h1>
        <form>
            <input type="text" className="form-control form-control-sm mt-5" placeholder="Name, technologies, gender" value={q} onChange={(e) => setQ(e.target.value)}></input>
        </form>
        <section class="section about-section gray-bg" id="about">
            <div class="container border">
                {search(holbies).map(holbie => (
                    <div class="flex-row-reverse border-bottom border-top">
                        <div class="">
                            <div class="about-text go-to">
                                <img src={require("../../../../backend/profile_pictures/" + holbie.id + ".png").default} class=" img-thumbnail rounded float-right" width="200" height="200" />
                                <h3 class="dark-color mt-4">{holbie.name} AAAAAA</h3>
                                <p>{holbie.about_me.substring(0, 200) + "..."}</p>
                            </div>
                            <div class="about-text go-to">
                                <h4 class="dark-color">Technologies</h4>
                                <p>{holbie.technologies}</p>
                            </div>
                            <div class="about-text go-to">
                                <h4 class="dark-color">The most amazing thing</h4>
                                <p>{holbie.most_amazing_thing}</p>
                            </div>
                            <div class="about-text go-to">
                                <h4 class="dark-color">Gender</h4>
                                <p>{holbie.gender}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </Fragment>

}

export default ListHolbies;
