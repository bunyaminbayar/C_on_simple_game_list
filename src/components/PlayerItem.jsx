import React, { useContext } from 'react';

// Get User info "username, avatar, event, logout function event" from app.js
import { UserLogin } from '../App';
import { Link } from "react-router-dom";

export default function PlayerItem() {

  const { gUserName, gUserAvatar, gUserEvent, logOut } = useContext(UserLogin); // Get User info "username, avatar, event, logout function event" from app.js

  return (
    <>
      <div className="userContainer">

        {/**<!-- player item template --> */}

        <img className="avatar" src={gUserAvatar} alt="avatar" />
        <div className="userDesc">
          <b className="userName">{gUserName}</b>
          <div className="UserEvent">{gUserEvent}</div>
        </div>

        {/** <!-- end player item template --> */}

      </div>
      <Link to={"/login"}>
        <div onClick={logOut} className="logout">
          <i className="myLeftChevron">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </i>
          Log Out
        </div>
      </Link>
    </>
  )
}
