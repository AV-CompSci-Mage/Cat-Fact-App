import cat from './cat.png'; //logo for my app! found here: https://www.pngplay.com/image/374720
import github from './github.png'; 
import './App.css';
import React, { useState, useEffect } from 'react'; //useState used as per the instructions



function App()
{
  const [data, setData] = useState([]) //setting up data and error states
  const [error, setError] = useState("")
  const fetchData = () => {
    setError("")
    fetch("https://catfact.ninja/fact") //api link
    .then(response => {
      if (response.ok) {
        return response.json()
      } 
      else {
        throw new Error("Uh oh! There was an issue fetching your data!") //error message
      }
    })
      .then(data => {
        setData(data) //collects data from API
      })
      .catch(error => {
        setError(error.message) //displays error message if needed
      })
  }
  
    return ( //using a lot of default css because I like the way it looks :)
      <div>
        <header className="App-header"> 
        <h1>Welcome to Alyssa's Cat Fact Finder!</h1>

        <img src={cat} className="App-logo" alt="logo" />
        <p>Click here for your cat fact!</p>
        <button onClick={fetchData}>Click Me</button>
        {error && <p>{error}</p>}
        {useEffect(() => {
        fetchData()
                  }, [])}
        {data.length > 0 && ( //checks to see if the length of the string for data is more than 0
          <ul>
          {data.fact}
          </ul>
        )} 

        <p>Like what you see? Be sure to follow me on Github!</p>
        <a href="https://github.com/AV-CompSci-Mage"> <img src={github}  alt="github logo" /> </a> 

        </header>
      </div>
    )
  }
//very short and sweet since my api link didnt need much user input but pressing a button
//I decided to hide the facts until the user pressed the button so that there would be a reason for it to be there in the first place
export default App;

