import React from 'react';
import RecipeDetails from './RecipeDetails';


const Recipe = ( {recipe} ) => {
    const { label, url, image, ingredients } = recipe.recipe;

  return (
    <div className='recipe'>
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
        <button>Ingredients</button>
        <RecipeDetails />
    </div>
  )
}

export default Recipe