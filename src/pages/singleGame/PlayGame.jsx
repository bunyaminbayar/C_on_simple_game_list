import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./playGame.css";

// used react iframe
import Iframe from 'react-iframe';

// added game src data static file
import GameSrc from "../../assets/gameSrc/gameSrc.json";

export default function PlayGame() {

  const location = useLocation();
  const navigate = useNavigate();
  let iframeSrc = "";

  // get gamecode value from url and find src value
  for (let i = 0; i < GameSrc.length; i++) {
    if (location.pathname.split("/")[2] === GameSrc[i].name) {

      // set src value to iframe
      iframeSrc = GameSrc[i].src;
    }
  }

  const BackToGames = () => {
    navigate("/");
  }

  return (
    <div>
      <Iframe url={iframeSrc} className="gameIframe" />

      {/** back to home btn */}
      <div onClick={BackToGames} class="backGamesBtn">
        <i class="myLeftChevron">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
          </svg>
        </i>Back To Games
      </div>
    </div>
  )
}
