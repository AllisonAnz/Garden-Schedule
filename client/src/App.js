import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate} from 'react-router'

import NavigationBar from './components/nav/Navbar';
import Home from './components/home/Home'
import LoginForm from './components/forms/LoginForm'
import SignupForm from './components/forms/SignupForm';

import NewPlant from './containers/NewPlant';

import AllPlantsList from './components/lists/AllPlantsList';
import GardenPlantsList from './components/lists/GardenPlantsList';
import HousePlantsList from './components/lists/HousePlantsList';
import VeggiePlantsList from './components/lists/VeggiePlantsList';

import GardenPage from './components/pages/GardenPage';
import HousePage from './components/pages/HousePage';
import VeggiePage from './components/pages/VeggiePage';

import './App.css'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (user) => {
    setUser(user)
    setLoggedIn(true)
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


  if (loading) return (<div>...loading</div>)

  return (
    <div className="App">
      <NavigationBar user={user} loggedIn={loggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route index path="/" element={ loggedIn ? <Home user={user} loggedIn={loggedIn} /> : <LoginForm onLogin={handleLogin}/>} />
        <Route path="/signup" element={<SignupForm onSignin={handleLogin}/>} />
        <Route path="/newplant" element={<NewPlant user={user}/>} />
        <Route path="/allplants" element={<AllPlantsList user={user} />} />
        <Route path="/gardenplants" element={<GardenPlantsList />} />
        <Route path="/houseplants" element={<HousePlantsList />} />
        <Route path="/veggieplants" element={<VeggiePlantsList />} />
        <Route path="/gardenplant/:id" element={< GardenPage />} />
        <Route path="/houseplant/:id" element={< HousePage />} />
        <Route path="/veggieplant/:id" element={< VeggiePage />} />
      </Routes>
    </div>
  );
}

export default App;
