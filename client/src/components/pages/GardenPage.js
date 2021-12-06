import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap'
//import EditPlant from './EditPlant';



const GardenPage = () => {
    const [plant, setPlant] = useState({})
    const params = useParams()
    const [isEditing, setEditing] = useState(false)
    const [isDeleted, setDeleted] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'manual'
        };

        fetch(`http://localhost:3000/api/v1/garden_plants/${params.id}`, requestOptions)
            .then(response => response.json())
            .then((plants) => {
                    setPlant(plants)
                    setLoading(false)
                })
            .catch(error => console.log('error', error));
    }, [params.id])
    //debugger

    const handleSubmit = (e) => {
        e.preventDefault()
        gardenPlantFetchRequest()

        setEditing(false)
    }

    const gardenPlantFetchRequest = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            "color": plant.plantable.color


        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch(`http://localhost:3000/garden_plants/${params.id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        setPlant({
            ...plant, plantable: { ...plant.plantable, [e.target.name]: e.target.value }
        })
    }

    const handlePlantChange = (e) => {
        setPlant({
            ...plant, [e.target.name]: e.target.value
        }
        )
    }

    const handleDelete = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'manual'
        };

        fetch("http://localhost:3000/plants/6", requestOptions)
            .then(response => response.json())
            .then(setDeleted(true))
            .catch(error => console.log('error', error));
    }

    if (loading) return (<div>...loading</div>)

    if (plant) {

        const { name, life_cycle, color, garden_location, height, planting_season, bloom_season, planted, days_to_germinate, days_to_bloom, last_watered, last_fertilized, sun_requirement, description } = plant

        const Template = (
            <div>

                <dl className="row">
                    <dt className="col-sm-3">Life Cycle</dt>
                    <dd className="col-sm-9">{life_cycle}</dd>

                    <dt className="col-sm-3">Color</dt>
                    <dd className="col-sm-9">{color}</dd>

                    <dt className="col-sm-3">Last Watered</dt>
                    <dd className="col-sm-9">{last_watered}</dd>

                </dl>
                <button type="button" className="btn" onClick={() => setEditing(true)}>Edit</button>
            </div>
        )

        const editingTemplate = (
            <form onSubmit={handleSubmit}>
                <dl className="row">
                    <dt className="col-sm-3">Life Cycle</dt>
                    <input type="text" className="col-sm-9" name="life_cycle" placeholder={life_cycle} onChange={handleChange}></input>


                    <dt className="col-sm-3">Color</dt>
                    <input type="text" className="col-sm-9" name="color" placeholder={color} onChange={handleChange}></input>

                    <dt className="col-sm-3">Last Watered</dt>
                    <input type="date" className="col-sm-9" name="last_watered" placeholder={last_watered} onChange={handlePlantChange}></input>

    
                </dl>
                <button type="submit">Save</button>
            </form>
        )

        const DeletedTemplate = (
            <div>Plant Deleted!</div>
        )


        return (
            <div>
                <br/>
                <div className="delete">{isDeleted ? DeletedTemplate : ""}</div>
                <div className="plantcontainer" id="plant-section">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="image-responsive" alt="Plant" src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>{name}</h1>
                                </div>
                            </div>
                            <div>
                                <div className="edit">{isEditing ? editingTemplate : Template}</div>
                            </div>
                            <div>
                            </div>
                            <button type="button" className="btn" onClick={handleDelete}> Delete</button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex justify-content-center">
                        {description}
                    </div>
                </div>

                <div className="container">
                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
                        <Tab eventKey="Info" title="Planting Info">
                            <dl className="row">
                                <dt className="col-sm-3">Location</dt>
                                <dd className="col-sm-9">{garden_location}</dd>

                                <dt className="col-sm-3">Planted</dt>
                                <dd className="col-sm-9">{planted}</dd>

                                <dt className="col-sm-3">Days To Germinate</dt>
                                <dd className="col-sm-9">{days_to_germinate}</dd>

                                <dt className="col-sm-3">Days To Bloom</dt>
                                <dd className="col-sm-9">{days_to_bloom}</dd>

                                <dt className="col-sm-3">Last Fertilized</dt>
                                <dd className="col-sm-9">{last_fertilized}</dd>
                            </dl>
                        </Tab>
                        <Tab eventKey="profile" title="Plant Info">
                            <dl className="row">
                                <dt className="col-sm-3">Planting Season</dt>
                                <dd className="col-sm-9">{planting_season}</dd>

                                <dt className="col-sm-3">Bloom Season</dt>
                                <dd className="col-sm-9">{bloom_season}</dd>

                                <dt className="col-sm-3">Height</dt>
                                <dd className="col-sm-9">{height}</dd>

                                <dt className="col-sm-3">Sun Requirement</dt>
                                <dd className="col-sm-9">{sun_requirement}</dd>
                            </dl>
                        </Tab>

                        <Tab eventKey="contact" title="Contact" >
                            you did it!
                        </Tab>
                    </Tabs>
                </div>

            </div>
        )
    } else {
        return (
            <div>No Plant Fount</div>
        )
    }
}

export default GardenPage;