import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router';


const ListCards = ({plant, type}) => {
    const {name, image, description, id} = plant
    
    const navigate = useNavigate()

    const routeChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        if (e.target.value === "garden") {
           console.log("rerouting to garden...")
           navigate(`/gardenplant/${id}`) 
          
       } else if (type === "house") {
           console.log("rerouting to house..")
            navigate(`/houseplant/${id}`)
       
       } else if (type === "veggie") {
           console.log("rerouting to veggie")
            navigate(`/veggieplant/${id}`)

       } else {
           return console.log("error")
       }
    }
    

    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img src={image} variant="top" alt="plant" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> {description}</Card.Text>
                    <Button variant="info" value={type} onClick={routeChange}>Info </Button>
                </Card.Body>
            </Card>
    )
}

export default ListCards
