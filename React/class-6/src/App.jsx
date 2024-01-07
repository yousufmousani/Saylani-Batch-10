import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

let [questions, setquestions] = useState([])
let [currentIndex,setcurrentIndex] = useState(0)



useEffect (function(){
  getDataFromApi()
},[])

// console.log(questions)

  function getDataFromApi(){
    fetch('https://the-trivia-api.com/v2/questions')
    .then(res => res.json())
    .then(res => setquestions(res))
  }

  // console.log(questions)

  

  
  if(!questions.length){
    return <img src="https://i.pinimg.com/originals/59/22/20/5922208e18658f5e83b6ad801b895f71.gif" alt="" style={{marginLeft:'300px'}} />
  }

  
  
    
    function next (){
      setcurrentIndex(currentIndex + 1)
    }

    
    return (
       
      
      
       <header className="App-header">
      <div>
      <div className="App">
       <h2>Q : {questions[currentIndex].question.text}</h2><br/> 

<form style={{display:'flex',flexDirection:'row',justifyContent:'center',color:'lightblue'}}>
  
       <h4><input  type="radio" readOnly/> {questions[currentIndex].correctAnswer}<br/></h4>
       <h4><input type="radio"/>{questions[currentIndex].incorrectAnswers[0]}<br/></h4>
       <h4><input type="radio"/>{questions[currentIndex].incorrectAnswers[1]}<br/></h4>
       <h4><input type="radio"/>{questions[currentIndex].incorrectAnswers[2]}<br/><br/></h4>
       </form>
       <button onClick={next}>Next</button>
       </div>
      
    </div>
       </header>
  );
}

export default App;
