import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router';
//import EditPlant from './EditPlant';



const HousePage = () => {
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

        fetch(`http://localhost:3000/api/v1/house_plants/${params.id}`, requestOptions)
            .then(response => response.json())
            .then((plants) => {
                setPlant(plants)
                setLoading(false)
            })
            .catch(error => console.log('error', error));
    }, [params.id])
    //debugger

    const RouteChange = () => {
        navigate(`/houseplants`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        EditRequest()

        setEditing(false)
    }

    const EditRequest = () => {
        const { last_repotted, soil, watering_schedule, last_watered, last_fertilized, sun_requirement, description } = plant
        var formData = JSON.stringify({
            last_repotted, soil, watering_schedule, last_watered, last_fertilized, sun_requirement, description

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


        fetch(`http://localhost:3000/api/v1/house_plants/${params.id}`, requestOptions)
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

        fetch(`http://localhost:3000/api/v1/house_plants/${params.id}`, requestOptions)
            .then(response => response.json())
            .then(setDeleted(true),
                RouteChange)
            .catch(error => console.log('error', error));
    }

    if (loading) return (<div>...loading</div>)

    if (plant) {

        const { name, image, last_repotted, soil, watering_schedule, last_watered, last_fertilized, sun_requirement, description  } = plant

        const Template = (
            <div>

                <dl className="row">
                    <dt className="col-sm-3">Last Watered</dt>
                    <dd className="col-sm-9">{last_watered}</dd>

                    

                    <dt className="col-sm-3">Watering Schedule</dt>
                    <dd className="col-sm-9">{watering_schedule} days</dd>

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
                        <Tab eventKey="profile" title="Plant Info">
                            <dl className="row">
                                <dt className="col-sm-3">Last Fertilized</dt>
                                <dd className="col-sm-9">{last_fertilized}</dd>

                                <dt className="col-sm-3">Sun Requirement</dt>
                                <dd className="col-sm-9">{sun_requirement}</dd>

                                <dt className="col-sm-3">Last Repotted</dt>
                                <dd className="col-sm-9">{last_repotted}</dd>

                                <dt className="col-sm-3">Soil</dt>
                                <dd className="col-sm-9">{soil}</dd>
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
                        <Tab eventKey="profile" title="Plant Info">
                            <dl className="row">
                                <dt className="col-sm-3">Last Fertilized</dt>
                                <input className="col-sm-9" type="date" name="last_fertilized" placeholder={last_fertilized} onChange={handleChange}></input>

                                <dt className="col-sm-3">Sun Requirement</dt>
                                <input className="col-sm-9" type="text" name="sun_requirement" placeholder={sun_requirement} onChange={handleChange}></input>

                                <dt className="col-sm-3">Last Repotted</dt>
                                <input className="col-sm-9" type="date" name="last_repotted" placeholder={last_repotted} onChange={handleChange}></input>
                            
                                <dt className="col-sm-3">Soil Requirement</dt>
                                <input className="col-sm-9" type="text" name="soil" placeholder={soil} onChange={handleChange}></input>
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

                    <dt className="col-sm-3">Watering Schedule</dt>
                    <input type="integer" className="col-sm-9" name="watering_schedule" placeholder={watering_schedule} onChange={handleChange}></input>

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

export default HousePage;