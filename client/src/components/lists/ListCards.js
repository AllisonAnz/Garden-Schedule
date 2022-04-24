import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router';
import { Container, Row, Col } from "react-bootstrap";


const ListCards = ({plant, type}) => {
    const {name, image, description, id} = plant
    
    const navigate = useNavigate()

    const routeChange = (e) => {
        e.preventDefault()
        
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
       <>
            <Col className="py-3 px-md-5" sm="6">
                <Card > 
                    <Card.Img src={image} variant="top" alt="plant" />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> {description}</Card.Text>
                    <Button variant="info" value={type} onClick={routeChange}>Info </Button>
                </Card.Body>

                </Card>
            </Col>
       </>
    )
}

export default ListCards

//    < Card style = {{ width: '18rem' }}>
//                <Card.Img src={image} variant="top" alt="plant" />
//                <Card.Body>
//                    <Card.Title>{name}</Card.Title>
//                    <Card.Text> {description}</Card.Text>
//                    <Button variant="info" value={type} onClick={routeChange}>Info </Button>
//                </Card.Body>
//            </Card >
