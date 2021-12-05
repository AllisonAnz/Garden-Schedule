import React from 'react'

const Home = ({user}) => {
    return (
        <div>
            <h1>Homepage</h1>
            <h1>Hello {user.username}</h1>
        </div>
    )
}

export default Home;