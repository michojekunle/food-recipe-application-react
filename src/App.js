import React from 'react';
import './App.css'

const App = () => {
  const API_ID = "11936026";
  const API_KEY = "d07d03f53faf66beafc06604b25f4980";
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;

  
  return (
    <div className='App'>
      <h1>Food seacrhing app</h1>
    </div>
  )
}

export default App