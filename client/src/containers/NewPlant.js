import React, {useState} from 'react'
import GardenPlantForm from '../components/forms/GardenPlantForm'
import VeggiePlantForm from '../components/forms/VeggiePlantForm'
import HousePlantForm from '../components/forms/HousePlantForm'

const NewPlant = ({user}) => {
    const [type, setType] = useState("")
    const [loading, setLoading] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()
        setType(e.target.value)
        setLoading(false)
    }
    return (
        <div>
            <h1>New Plant Page</h1>
                <h2>Select Type </h2> 
                    <button type="button" className="btn btn-primary" value="house" onClick={handleClick}>House Plant</button>
                    <button type="button" className="btn btn-danger" value="garden" onClick={handleClick}>Garden Plant</button>
                    <button type="button" className="btn btn-info" value="veggie" onClick={handleClick}>Veggie Plant</button>
                <br/>
            <div className="container">

                {(type === "house") ? (<HousePlantForm user={user}/>) : 
                    (type === "garden") ? (<GardenPlantForm user={user}/>) :
                    (type === "veggie") ? (<VeggiePlantForm user={user}/>) : ("") }
         
            </div>
        </div>
    )
}

export default NewPlant
