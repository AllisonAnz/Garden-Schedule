import React from 'react'
import { useState } from "react";
import {Link} from 'react-router-dom'

const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                }
            })
        })
            .then((r) => r.json())
            .then((data) => {
                // save the token to localStorage for future access
                localStorage.setItem("jwt", data.jwt);
                // save the user somewhere (in state!) to log the user in
                onLogin(data.user);
            });
    }
    
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-4">
                    <div className="homepage-description">
                        <img className="center" alt="Bootstrap Preview" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnfNcPe50tdz66SrzuUFrl0l9IsvDdo5ybg&usqp=CAU" /><br />
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>

                    </div>
                </div>
                <div className="col-md-8">
                    <br/>
                    <div className="login-container">
                        <div className="container-sm">
                            <form onSubmit={handleSubmit}>
                                <h3>Log in</h3>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control" 
                                            type="text" value={username} 
                                            placeholder="Enter Username" 
                                            onChange={(e) => setUsername(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" 
                                            type="password"
                                            placeholder="Enter password" 
                                            onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                            </form>
                                <p>Not a member?</p>
                                <Link to='/signup'>
                                <button className="btn btn-dark btn-lg btn-block">Sign Up</button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;