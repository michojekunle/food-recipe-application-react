import React, { useState } from 'react';
import Axios from 'axios';
import './App.css'

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const API_ID = "11936026";
  const API_KEY = "d07d03f53faf66beafc06604b25f4980";
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  const getData = async () => {
    const result = await Axios.get(API_URL);
    setRecipes(result.data.hits)

    console.log(result);

    setQuery('')
  }

  const onChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div className='App'>
      <h1>Food seacrhing app</h1>
      <form className='search-form' onSubmit={onSubmit}>
        <input type='text' className='' placeholder='Search Food' autoComplete='off' onChange={onChange} value={query} />
        <input type='submit' value='Search' /> 
      </form>
      
      {/* <div className="recipes">
        <h1>{recipes}</h1>
      </div> */}
    </div>
  )
}

export default App