import React, { useState, useEffect } from 'react'
import ListCards from './ListCards'

const VeggiePlantsList = () => {
    const [loading, setLoading] = useState(false)
    const [veggiePlants, setVeggiePlants] = useState([])
    const [type, setType] = useState("")

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'manual'
        };

        fetch("http://localhost:3000/api/v1/veggie_plants", requestOptions)
            .then((r) => r.json())
            .then(setVeggiePlants);
        setType("veggie")
        setLoading(false)
    },
        []);

    if (loading) return (<div>...loading</div>)

    return (
        <div>
            <div className="container" >
                <h1>Veggie Plants</h1>
                <div className="card-columns">
                    {veggiePlants.map((plant) => {
                        return <ListCards key={plant.id} plant={plant} type={type} />
                    })}


                </div>

            </div>
        </div>
    )
}

export default VeggiePlantsList;
