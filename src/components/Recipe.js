import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';


const Recipe = ( {recipe} ) => {
    const { label, url, image, ingredients } = recipe.recipe;
    const [ dispIngredients, setDispIngredients ] = useState(false);

    const handleIngredients = () => {
      if (dispIngredients === false) {
        setDispIngredients(true)
      } else {
        setDispIngredients(false);
      }
    }
  return (
    <div className='recipe'>
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
        <button onClick={handleIngredients}>Ingredients</button>

        {
          dispIngredients && (<RecipeDetails ingredients={ingredients}/>)
        }
        
    </div>
  )
}

export default Recipe