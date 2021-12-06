import React, {useState, useEffect} from 'react'
import ListCards from './ListCards'

const GardenPlantsList = () => {
const [loading, setLoading] = useState(false)
const [gardenPlants, setGardenPlants] = useState([])

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("jwt");
        var requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            redirect: 'manual'
        };

        fetch("http://localhost:3000/api/v1/garden_plants", requestOptions)
            .then((r) => r.json())
            .then(setGardenPlants);
            setLoading(false)
        }, 
    []);
   
if (loading) return (<div>...loading</div>)

    return (
        <div>
            <h1>Garden Plants</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card-body">

                    {gardenPlants.map((plant) => {
                        return <ListCards plant={plant} />
                    })}

                    </div>

                </div>

            </div>
        </div>
    )
}

export default GardenPlantsList;
