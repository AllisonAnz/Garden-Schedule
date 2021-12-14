import React, { useState, useEffect } from 'react'
import ListCards from './ListCards'

const VeggiePlantsList = ({loggedIn}) => {
    const [loading, setLoading] = useState(false)
    const [veggiePlants, setVeggiePlants] = useState([])
    const [type, setType] = useState("")

    useEffect(() => {
        let mounted = true

        setLoading(true)
        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'manual'
        };

        fetch("http://localhost:3000/api/v1/veggie_plants", requestOptions)
            .then((r) => r.json())
            .then((data) => {
                if (mounted) {
                    setVeggiePlants(data)
                }
            });
        setType("veggie")
        setLoading(false)
        return () => { mounted = false }
    },
        []);

    if (loading) return (<div>...loading</div>)
    if (!loggedIn) return (<div>You Must be logged In to view this page</div>)

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
