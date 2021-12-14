import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const HousePlantForm = () => {
    const [name, setName] = useState("")
    const [image, setImg] = useState("")
    const navigate = useNavigate()

    const routeChange = () => {
        navigate(`/houseplants`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("jwt");
        const formData = {
            name,
            image
        }
        fetch("http://localhost:3000/api/v1/house_plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formData),
        }).then((r) => {
            if (r.ok) {
                r.json().then(() => {
                    routeChange();
                });
            } else {
                r.json().then((error) => console.log(error));
            }
        });
    }
    return (
        <div className="container-sm">
            <form onSubmit={handleSubmit}>
                <h3>Create A New House Plant</h3>

                <div className="form-group">
                    <label>Plant Name</label>
                    <input className="form-control"
                        type="text" value={name}
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Photo</label>
                    <input className="form-control"
                        type="img" value={image}
                        placeholder="image"
                        onChange={(e) => setImg(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
            </form>
        </div>
    )
}

export default HousePlantForm

