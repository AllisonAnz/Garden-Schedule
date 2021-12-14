import React, {useState, useEffect} from 'react'
import ListCards from './ListCards'


const GardenPlantsList = ({loggedIn}) => {
const [loading, setLoading] = useState(false)
const [gardenPlants, setGardenPlants] = useState([])
const [type, setType] = useState()


    useEffect(() => {
            let mounted = true

            setLoading(true)
            const token = localStorage.getItem("jwt");
            var requestOptions = {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
                redirect: 'manual'
            };

            fetch("http://localhost:3000/api/v1/garden_plants", requestOptions)
                .then((r) => r.json())
                .then((data) => {
                    if (mounted){
                    setGardenPlants(data)}
                });
                    setType("garden")
                    setLoading(false)
                    return () => {mounted = false}
        },
            []);
    
   
if (loading) return (<div>...loading</div>)
if (!loggedIn) return (<div>You Must be logged In to view this page</div>)

    return (
        <div>
            <div className="container" >
            <h1>Garden Plants</h1>
                <div className="card-columns">
                    {gardenPlants.map((plant) => {
                        return <ListCards key={plant.id} plant={plant} type={type} />
                    })}


                </div>

            </div>
        </div>
    )
}

export default GardenPlantsList;
