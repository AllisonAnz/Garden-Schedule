import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate} from 'react-router'

import NavigationBar from './components/nav/Navbar';
import Home from './components/home/Home'
import LoginForm from './components/forms/LoginForm'
import SignupForm from './components/forms/SignupForm';


import './App.css'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (user) => {
    setLoggedIn(true)
    setUser(user)
    navigate('/')
  }

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("jwt");
    var requestOptions = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
      redirect: 'manual'
    };

    const fetchData = async () => {
      await fetch("http://localhost:3000/api/v1/profile", requestOptions)
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user.user)
              setLoggedIn(true)
            });
          }
          setLoading(false)
        });
    }
    fetchData()
  }, []);

  const handleLogout = () => {
    setUser("");
    setLoggedIn(false)
    localStorage.removeItem('jwt')
    navigate('/')
  }

  //if (!user) return (
  //       <Routes>
  //        <Route index path="/" element={<LoginForm/>} />
  //        <Route path="/signup" element={<SignupForm />} />
  //       </Routes>
  //        )

  if (loading) return (<div>...loading</div>)

  return (
    <div className="App">
      <NavigationBar user={user} loggedIn={loggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route index path="/" element={ loggedIn ? <Home user={user} loggedIn={loggedIn} /> : <LoginForm onLogin={handleLogin}/>} />
        <Route path="/signup" element={<SignupForm onSignin={handleLogin}/>} />
      </Routes>
    </div>
  );
}

export default App;
