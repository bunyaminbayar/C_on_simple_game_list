import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FilterCategoriValue } from '../pages/games/Games'; // for send categorie value from categorie item id

const GamesCategories = () => {

  const [gameCategories, setGameCategories] = useState([]); // for list categorie
  const { setGameCategoriID } = useContext(FilterCategoriValue); // for send categorie value from categorie item id

  useEffect(() => {
    // list categories function
    const fectAllCategories = async () => {
      try {
        axios.get(`http://localhost:3001/categories`)
          .then(res => {
            const gameCategoriesData = res.data;
            setGameCategories(gameCategoriesData);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fectAllCategories();
  }, []);

  return (
    <div className='categoriesBox'>
      {gameCategories.map(categorItem => (
        <div key={categorItem.id} className="categoryItem">
          <div className="content">
            <div onClick={(e) => setGameCategoriID(e.target.id)} id={categorItem.id} className="categoriName">{categorItem.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GamesCategories
