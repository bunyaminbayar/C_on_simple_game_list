
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./assets/css/styles.css";

import Navbar from './components/Navbar';
import Games from './pages/games/Games';
import Login from './pages/login/Login';
import GetCookie from './hooks/getCookie';
import RemoveCookie from './hooks/removeCookie'
import PlayGame from './pages/singleGamePage/PlayGame';

export const UserLogin = React.createContext();

export default function App() {

  // get user data from cookie. g = global mean
  const [gUserName, setGUserName] = useState(GetCookie('ComeonUserName'));
  const [gUserAvatar, setGUserAvatar] = useState(GetCookie('ComeonUserAvatar'));
  const [gUserEvent, setGUserEvent] = useState(GetCookie('ComeonUserEvent'));

  // Log out
  const logOut = () => {
    console.log(gUserName)
    RemoveCookie('ComeonUserName');
    RemoveCookie('ComeonUserAvatar');
    RemoveCookie('ComeonUserStaus');
    RemoveCookie('ComeonUserEvent');
    reRender();
  }

  const reRender = () => {
    // I added this function because I wanted it to show live in Topbar above when user wants to change username.
    this.forceUpdate();
  };


  return (
    <BrowserRouter>
      <Navbar />
      <div className='main container'>
        <Routes>
          <Route exact path='/' element={
            <UserLogin.Provider value={{ gUserName, gUserAvatar, gUserEvent, logOut }}>
              <Games />
            </UserLogin.Provider>
          } />
          <Route exact path='/login' element={
            <UserLogin.Provider value={{ setGUserName, setGUserAvatar, setGUserEvent }}>
              <Login />
            </UserLogin.Provider>
          } />
          <Route path="/casino/:id" element={<PlayGame />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



