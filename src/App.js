import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4} from 'uuid';
import Recipe from './components/Recipe';
import './App.css'
import Alert from './components/Alert';
import Ripples from './components/Ripples';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const API_ID = "11936026";
  const API_KEY = "d07d03f53faf66beafc06604b25f4980";
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  const getData = async () => {

    if (query !== "") {
      setLoading(true);
      const result = await Axios.get(API_URL);
      
      if (result.data.count < 1) {
        return setAlert("No food with such name")
      }

      setRecipes(result.data.hits)
      console.log(result);
      setAlert("")
      setQuery('')
      setLoading(false);
    } else {
      setAlert("please fill the form");
    }
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
        { alert && <Alert alert={alert} />}
        <input type='text' className='search-input' placeholder='Search Food' autoComplete='off' onChange={onChange} value={query} />
        <input type='submit' value='Search' /> 
      </form>

      {
        loading && <Ripples />
      }
      <div key={uuidv4()} className="recipes">
        {recipes !== [] && recipes.map(recipe => <Recipe  recipe={recipe}/>)}
      </div>
    </div>
  )
}

export default App