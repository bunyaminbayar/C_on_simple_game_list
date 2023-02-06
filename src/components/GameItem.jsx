import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Get search input value from SearcGameItem.jsx
import { SearchKeyValue } from '../pages/games/Games';

// Get categorie id value from Gamecategories.jsx
import { FilterCategoriValue } from '../pages/games/Games';

const GamesItem = () => {

  const { searchKey } = useContext(SearchKeyValue);
  const [games, setGames] = useState([]);
  const { gameCategoriID } = useContext(FilterCategoriValue);

  useEffect(() => {

    // list games item
    const fectAllGames = async () => {
      try {
        axios.get(`http://localhost:3001/games`)
          .then(res => {
            const gamesData = res.data;
            setGames(gamesData);
          })
      } catch (err) {
        console.log(err);
      }
    }
    fectAllGames();
  }, []);

  return (
    <>
      {games.filter((game) => {
        /** filter by categories and and search input value */
        return game.categoryIds.toString().includes(gameCategoriID) && game.name.toLowerCase().includes(searchKey.toLowerCase())
      }).map((game) => (
        <div className="gameItem" key={game.code}>
          <div className="cloumn1">
            <img className='gameImg' src={game.icon} alt="game-icon" />
          </div>
          <div className="cloumn3">
            <b className="gameName">{game.name}</b>
            <div className="gameDesc">{game.description}</div>
            <div className="gameBtnContainer">
              <Link to={`/casino/${game.code}`}>
                <div className="playGameBtn">
                  Play
                  <i className="myRightChevron">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fill="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default GamesItem
