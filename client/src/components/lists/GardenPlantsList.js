import React, {useState, useEffect} from 'react'
import ListCards from './ListCards'
import { Container, Row } from "react-bootstrap";


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
        <div className="container">
            <Container>
                <Row sm={6} md={4}>
                    {gardenPlants.map((plant) => {
                        return <ListCards key={plant.id} plant={plant} type={type} />
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default GardenPlantsList;
