import React, { useState, useEffect } from 'react'
import ListCards from './ListCards'
import { Container, Row} from "react-bootstrap";

const HousePlantsList = ({loggedIn}) => {
    const [loading, setLoading] = useState(false)
    const [housePlants, setHousePlants] = useState([])
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

        fetch("http://localhost:3000/api/v1/house_plants", requestOptions)
            .then((r) => r.json())
            .then((data) => {
                if (mounted) {
                    setHousePlants(data)
                }
            });
        setType("house")
        setLoading(false)
        return () => { mounted = false }
    },
        []);

    if (loading) return (<div>...loading</div>)
    if (!loggedIn) return (<div>You Must be logged In to view this page</div>)

    return (
        <div className="container">
            <Container>
                <Row sm={6} md={4}>
                    {housePlants.map((plant) => {
                        return <ListCards key={plant.id} plant={plant} type={type} />
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default HousePlantsList;


