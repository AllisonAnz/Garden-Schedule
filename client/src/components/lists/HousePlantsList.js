import React, { useState, useEffect } from 'react'
import ListCards from './ListCards'

const HousePlantsList = () => {
    const [loading, setLoading] = useState(false)
    const [housePlants, setHousePlants] = useState([])
    const [type, setType] = useState("")

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'manual'
        };

        fetch("http://localhost:3000/api/v1/house_plants", requestOptions)
            .then((r) => r.json())
            .then(setHousePlants);
            setType("house")
            setLoading(false)
    },
        []);

    if (loading) return (<div>...loading</div>)

    return (
        <div>
            <div className="container" >
                <h1>House Plants</h1>
                <div className="card-columns">
                    {housePlants.map((plant) => {
                        return <ListCards key={plant.id} plant={plant} type={type} />
                    })}


                </div>

            </div>
        </div>
    )
}

export default HousePlantsList;
