import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router';
import GardenPage from '../pages/GardenPage';


const ListCards = ({plant}) => {
    const {name, image, description, id} = plant
    const navigate = useNavigate()

    const routeChange = () => {
        console.log("clicked")
        navigate(`/gardenplant/${id}`)
    }

    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img src={image} variant="top" alt="plant" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> {description}</Card.Text>
                    <Button variant="info" onClick={routeChange}>Info </Button>
                </Card.Body>
            </Card>
    )
}

export default ListCards
