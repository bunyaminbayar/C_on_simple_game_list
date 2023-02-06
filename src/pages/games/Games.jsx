import React, { useEffect, useState } from "react";
import "./games.css";

// React js get cookie
import GetCookie from './../../hooks/getCookie';
import { useNavigate } from "react-router-dom";

import PlayerItem from "../../components/PlayerItem";
import GamesItem from "../../components/GameItem";
import SearchGameItem from "../../components/SearchGameItem";
import GamesCategories from "../../components/GameCategories";

// added context for game search input value
export const SearchKeyValue = React.createContext();

// added context for game categorie value
export const FilterCategoriValue = React.createContext();

export default function Games() {

  const navigate = useNavigate();
  
  // add statement for game search input value
  const [searchKey, setsearchKey] = useState('');

  // add statement for game categorie value
  const [gameCategoriID, setGameCategoriID] = useState('');

  useEffect(() => {

    // if user not login control in cookie and navigate to login page
    if (GetCookie('ComeonUserStaus') !== 'success') {
      navigate('/login');
    }
  });

  return (
    <div className="casino">
      <div className="casinoHeader">
        <div className="cloumn4">

          {/** Palyer ıtem */}
          <PlayerItem />
          {/** Palyer ıtem */}

        </div>
        <div className="cloumn2">

          {/** Serach game item */}
          <SearchKeyValue.Provider value={{ setsearchKey }}>
            <SearchGameItem />
          </SearchKeyValue.Provider>
          {/** Serach game item */}

        </div>
      </div>

      <div className="gamesCont">
        <div className="cloumn4 gamesList">
          <h3 className="gamesTitle">Games</h3>

          {/** <!-- game item template --> */}

          <SearchKeyValue.Provider value={{ searchKey }}>
            <FilterCategoriValue.Provider value={{ gameCategoriID }} >
              <GamesItem />
            </FilterCategoriValue.Provider>
          </SearchKeyValue.Provider>

          {/** <!-- end game item template --> */}

        </div>
        <div className="cloumn1 categoriCont">
          <h3 className="gameCategories">Categories</h3>

          {/** <!-- category item template -->*/}
          <FilterCategoriValue.Provider value={{ setGameCategoriID }}>
            <GamesCategories />
          </FilterCategoriValue.Provider>
          {/**  <!-- end category item template --> */}

        </div>
      </div>

    </div>
  )
}