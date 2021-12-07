import React, {useState} from 'react'

const SignupForm = ({onSignin}) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    first_name: firstname,
                    last_name: lastname,
                    password: password,
                    passwordConfirmation: passwordConfirmation

                }
            })
        })
            .then((r) => r.json())
            .then((data) => {
                // save the token to localStorage for future access
                localStorage.setItem("jwt", data.jwt);
                // save the user somewhere (in state!) to log the user in
                onSignin(data.user);
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
                <div className="login-container">
                    <div className="container-sm">
                        <form onSubmit={handleSubmit}>
                            <h3>Sign up!</h3>

                            <div className="form-group">
                                <label>Username: </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                    />
                            </div><br />

                            <div className="form-group">
                                <label>First Name: </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    value={firstname}
                                    onChange={(e) => { setFirstname(e.target.value) }}
                                    />
                            </div><br />

                            <div className="form-group">
                                <label>Last Name: </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    value={lastname}
                                    onChange={(e) => { setLastname(e.target.value) }}
                                    />
                            </div><br/>

                            <div className="form-group">
                                <label>Password: </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    />
                            </div><br/>

                            <div className="form-group">
                                <label>Confirm Password : </label>
                                <input
                                    type="password"
                                    id="passwordConfirmation"
                                    value={passwordConfirmation}
                                    onChange={(e) => { setPasswordConfirmation(e.target.value) }}
                                    />
                            </div><br/>

                                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                       
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    )
}


export default SignupForm
