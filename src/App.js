import cat from './cat.png';
import './App.css';
import React, { useState } from 'react';



function App()
{
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }
  
    return (
      <div>
        <header className="App-header">
        <h1>Welcome to Alyssa's Cat Fact Finder!</h1>

        <img src={cat} className="App-logo" alt="logo" />
        <p>Click here for your cat fact!</p>
        <button onClick={fetchData}>Click Me</button>
        {data.length > 0 && (
          <ul>
            {data.fact}
          </ul>
        )}
        </header>
      </div>
    )
  }
    /*<div className="App">
      <header className="App-header">
        <h1>Welcome to Alyssa's Cat Fact Finder!</h1>

        <img src={cat} className="App-logo" alt="logo" />
        <p>Click here for your cat fact!</p>
        <Button 
        border=""
        color="lavender"
        height = "40px"
        onClick={getData}>Fetch data
        radius = "5%"
        width = "100px"
        children = "Click me!"
      />
        
      </header>
    </div>*/





export default App;

