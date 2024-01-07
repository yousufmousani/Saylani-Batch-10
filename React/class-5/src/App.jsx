import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function States() {
  let [bulb,setbulb] = useState(true)

  function handle(){
    setbulb(!bulb)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
      {
        bulb ? <img src="https://toppng.com/public/uploads/thumbnail/light-bulb-on-off-png-11553940208gbhhx7rj3t.png" alt="" width={'300px'} />
        : <img src="https://toppng.com/public/uploads/thumbnail/light-bulb-on-off-png-115539403195dzrdrd6di.png" alt="" width={'300px'}/>
        
      }
      <button onClick={handle}>On/Off</button>

      </header>
    </div>
  );
}


export default States;
