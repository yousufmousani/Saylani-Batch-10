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
  
       <h4><input type="radio" name='option'/> {questions[currentIndex].correctAnswer}<br/></h4>
       <h4><input type="radio" name='option'/> {questions[currentIndex].incorrectAnswers[0]}<br/></h4>
       <h4><input type="radio" name='option'/> {questions[currentIndex].incorrectAnswers[1]}<br/></h4>
       <h4><input type="radio" name='option'/> {questions[currentIndex].incorrectAnswers[2]}<br/><br/></h4>
       </form>
       <button onClick={next}>Next</button>
       </div>
      
    </div>
       </header>
  );
}

export default App;






// // import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {

// let [questions, setquestions] = useState([])
// let [currentIndex,setcurrentIndex] = useState(0)
// let [score ,setscore] = useState(0)



// useEffect (function(){
//   getDataFromApi()
// },[])

// // console.log(questions)

//   function getDataFromApi(){
//     fetch('https://the-trivia-api.com/v2/questions')
//     .then(res => res.json())
//     .then(res => {
// res.map(function(item){
//   item.options = [...item.incorrectAnswers,item.correctAnswer]
//   item.options = shuffle(item.options)
// })
// setquestions(res)
//    console.log((res))  
//     })
//   }

//   function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex > 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//       }
      
//       return array;
//     }
    
//     // Used like so
//     var arr = [2, 11, 37, 42];
//     shuffle(arr);
//     // console.log(arr);
    
//     // console.log(questions)
    
  
    
    
//     if(!questions.length){
//       return <h1>hello</h1>
//     }
  
//   function Finish(){

//     var answ = document.getElementById('answ').value.question[currentIndex].correctAnswer
     
//           {if(answ.value = questions[currentIndex].correctAnswer){
// console.log('true')
//           }
//          }
         
         
//         //  else(setscore(score --))
//         //  console.log(score)

         
//       }
      
      
      
      
//       function next (){
//         setcurrentIndex(currentIndex + 1)
//       }
      
    
//     return (
       
      
      
//        <header className="App-header">
//       <div>
//       <div className="App">
//        <h2>Q : {questions[currentIndex].question.text}</h2><br/> 

// {/* <form style={{display:'flex',flexDirection:'row',justifyContent:'center',color:'lightblue'}}> */}
  
//        {
//        questions[currentIndex].options.map(function(data){

//         return <div>
//           <input type="radio" id='answ' name='answer' key={data}/>{data}
//         </div>
//        })
//         }

        
       
// {/* 
//        </form> */}

//        {
//         currentIndex === questions.length -1 ?
//         <button onClick={Finish} >Finish</button> :
//        <button onClick={next}>Next</button>
//        }
//        </div>
      
//     </div>
//        </header>
//   );
// }

// export default App;





// Quiz app with Score and component//




// import React from 'react'
// import { useState , useEffect } from 'react';
// import Result from './components/Result';
// // import Result from './Result'
// let score = 0



// function Quiz() {


//   const [questions , setquestions] = useState([])
//   const [currentindex , setindex] = useState(0)
//   // const [click, setclick] = useState()
//   // console.log(click,setclick);

//   useEffect(()=>{
//     getdata()
    
//   },[])

//    let getdata = ()=>{
//     fetch('https://the-trivia-api.com/v2/questions')
//       .then(response => response.json())
//       .then(res =>{
//         res.map((item)=>{
//           item.option = [...item.incorrectAnswers,item.correctAnswer]
//           item.option = shuffle(item.option)
//         }) 
//         // 
//      setquestions(res)
//         // console.log(res); 
//         }
      
//         )
//    }


// // =========================>

//    function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex > 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }
  
//   // Used like so
//   var arr = [2, 11, 37, 42];
//   shuffle(arr);

// // =========================>
 
// if(!questions.length){
//   return(
//     <h1>Loading...</h1>
//   )
// }




// function next()
// {
//   setindex (currentindex + 1)
// }

// function Finish(){
//   // console.log('Your score is '+score)

//   {
//     currentindex === questions.length == 9 ?
//     <Result scr={'your score is ' + score}/>:
//     console.log()
//           }
  
  
// }

// function check(opt){
  
//  opt == questions[currentindex].correctAnswer && score ++
// //  console.log( score++  );
// //  console.log(opt);



// }



//   return (
//     <div>
//         <h1>Quiz App</h1>
//         <ul>  
//            <li> {questions[currentindex].question.text}  </li>  
//            <li> {questions[currentindex].correctAnswer} </li>
//           </ul>



// {

//   questions[currentindex].option.map((data)=>{
//     return(
//       <div>
//         <input type="radio" name='data' onClick={()=>check(data)} /> 
//         <label htmlFor="">{data}</label> 
//         <div>
          
//         </div>
//       </div>
      
//     )

//   })



  
  
// } 
//  {
 
//         currentindex === questions.length -1  ?
//         <button onClick={Finish} >Finish</button> :
//          <button id='btn' onClick={next}>Next</button> 
       
//       }

//       {
// currentindex === questions.length-1 ?


// <Result scr={'your score is ' + score}/>:
// console.log()
//       }


       
//     </div>
//   )
// }

// export default Quiz;