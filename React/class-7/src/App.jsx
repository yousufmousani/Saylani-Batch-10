import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [city,setcity] = useState('')
  let [input,setinput] = useState('')

  function inp(e){
    setinput(input = e.target.value)
    // console.log(input)
  }
  function search(){
var data = [...city]
data.push(input)
setcity(city = data)
// console.log(city)
}


  function getApi(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2dbeb6cf7122de03e8ff27037f9585bf`)
    .then(data => data.json())
    .then(data => console.log(data))
  }

useEffect(function(){

  getApi()
},[city])

  
  
  return (
    <div className="App">

      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <input type="text" name="" id="" onChange={inp} />
      <button onClick={search}>search</button>
      
      
    </div>
  );
}

export default App;
