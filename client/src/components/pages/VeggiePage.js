import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router';


const VeggiePage = () => {
    const [plant, setPlant] = useState({})
    const params = useParams()
    const [isEditing, setEditing] = useState(false)
    const [isDeleted, setDeleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'manual'
        };

        fetch(`http://localhost:3000/api/v1/veggie_plants/${params.id}`, requestOptions)
            .then(response => response.json())
            .then((plants) => {
                setPlant(plants)
                setLoading(false)
            })
            .catch(error => console.log('error', error));
    }, [params.id])
    //debugger

    const RouteChange = () => {
        navigate(`/veggieplants`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        EditRequest()

        setEditing(false)
    }

    const EditRequest = () => {
        const { veggie_location, planting_season, harvest_season, planted, days_to_harvest, days_to_germinate, last_watered, last_fertilized, sun_requirement, description } = plant
        var formData = JSON.stringify({
            veggie_location, planting_season, harvest_season, planted, days_to_harvest, days_to_germinate, last_watered, last_fertilized, sun_requirement, description

        })

        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: formData,
            redirect: 'manual'
        };


        fetch(`http://localhost:3000/api/v1/garden_plants/${params.id}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const handleChange = (e) => {
        //console.log(e.target.name)
        setPlant(prevPlant => ({ ...prevPlant, [e.target.name]: e.target.value }))

    }


    const handleDelete = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'manual'
        };

        fetch(`http://localhost:3000/api/v1/veggie_plants/${params.id}`, requestOptions)
            .then(response => response.json())
            .then(setDeleted(true),
                RouteChange)
            .catch(error => console.log('error', error));
    }

    if (loading) return (<div>...loading</div>)

    if (plant) {

        const { name, image, veggie_location, planting_season, harvest_season, planted, days_to_harvest, days_to_germinate, last_watered, last_fertilized, sun_requirement, description } = plant

        const Template = (
            <div>
                <dl className="row">
                    <dt className="col-sm-3">Last Watered</dt>
                    <dd className="col-sm-9">{last_watered}</dd>
                </dl>
                <button type="button" className="btn" onClick={() => setEditing(true)}>Edit</button>
            </div>
        )

        const containerTemplate = (
            <div>
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
                                <dd className="col-sm-9">{veggie_location}</dd>

                                <dt className="col-sm-3">Planted</dt>
                                <dd className="col-sm-9">{planted}</dd>

                                <dt className="col-sm-3">Days To Germinate</dt>
                                <dd className="col-sm-9">{days_to_germinate}</dd>

                                <dt className="col-sm-3">Days To Harvest</dt>
                                <dd className="col-sm-9">{days_to_harvest}</dd>

                                <dt className="col-sm-3">Last Fertilized</dt>
                                <dd className="col-sm-9">{last_fertilized}</dd>
                            </dl>
                        </Tab>
                        <Tab eventKey="profile" title="Plant Info">
                            <dl className="row">
                                <dt className="col-sm-3">Planting Season</dt>
                                <dd className="col-sm-9">{planting_season}</dd>

                                <dt className="col-sm-3">Bloom Season</dt>
                                <dd className="col-sm-9">{harvest_season}</dd>


                                <dt className="col-sm-3">Sun Requirement</dt>
                                <dd className="col-sm-9">{sun_requirement}</dd>
                            </dl>
                        </Tab>

                        <Tab eventKey="comments" title="Comments" >
                            puts comments here
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )

        const editingContainerTemplate = (
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <textarea type="text" name="description" placeholder={description} onChange={handleChange} />  
                </div>

                <div className="container">
                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
                        <Tab eventKey="Info" title="Planting Info">
                            <dl className="row">
                                <dt className="col-sm-3">Location</dt>
                                <input className="col-sm-9" type="text" name="veggie_location" placeholder={veggie_location} onChange={handleChange}></input>

                                <dt className="col-sm-3">Planted</dt>
                                <input className="col-sm-9" type="date" name="planted" placeholder={planted} onChange={handleChange}></input>

                                <dt className="col-sm-3">Days To Germinate</dt>
                                <input className="col-sm-9" type="text" name="days_to_germinate" placeholder={days_to_germinate} onChange={handleChange}></input>

                                <dt className="col-sm-3">Days To Harvest</dt>
                                <input className="col-sm-9" type="text" name="days_to_bloom" placeholder={days_to_harvest} onChange={handleChange}></input>

                                <dt className="col-sm-3">Last Fertilized</dt>
                                <input className="col-sm-9" type="date" name="last_fertilized" placeholder={last_fertilized} onChange={handleChange}></input>
                            </dl>
                            <button type="submit">Save</button>
                        </Tab>
                        <Tab eventKey="profile" title="Plant Info">
                            <dl className="row">
                                <dt className="col-sm-3">Planting Season</dt>
                                <input className="col-sm-9" type="text" name="planting_season" placeholder={planting_season} onChange={handleChange}></input>

                                <dt className="col-sm-3">Bloom Season</dt>
                                <input className="col-sm-9" type="text" name="harvest_season" placeholder={harvest_season} onChange={handleChange}></input>

                                <dt className="col-sm-3">Sun Requirement</dt>
                                <input className="col-sm-9" type="text" name="sun_requirement" onChange={handleChange}></input>
                            </dl>
                            <button type="submit">Save</button>
                        </Tab>
                    </Tabs>
                </div>
            </form>
        )

        const editingTemplate = (
            <form onSubmit={handleSubmit}>
                <dl className="row">

                    <dt className="col-sm-3">Last Watered</dt>
                    <input type="date" className="col-sm-9" name="last_watered" placeholder={last_watered} onChange={handleChange}></input>

                </dl>
                <button type="submit">Save</button>
            </form>
        )

        const DeletedTemplate = (
            <div>Plant Deleted!</div>
        )


        return (
            <div>
                <br />
                <div className="delete">{isDeleted ? DeletedTemplate : ""}</div>

                <div className="plantcontainer" id="plant-section">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="image-responsive" alt="Plant" src={image} />
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
                <div className="edit">{isEditing ? editingContainerTemplate : containerTemplate}</div>


            </div>
        )
    } else {
        return (
            <div>No Plant Fount</div>
        )
    }
}

export default VeggiePage;