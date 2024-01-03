import logo from './logo.svg';
import './App.css';


function App() {
    
  const name = "Hello World";
  const obj = {name: "Hello World Object"}
  const data = ['We', 'are', 'United']
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
  const complex = [{company: 'XYZ', jobs: ['Javascript,','React']}, {company: 'ABC', jobs: ['AngularJs','Ionic']}]
return (
  <div style={{textAlign:'center'}}>
      <div>{name}</div><br />
<div>{obj.name}</div><br />
{data.map((value,index)=>{
  return <div style={{display:'inline-block'}}>{value}</div>

  
})}

{list.map((value,index)=>{
return <div style={{display:'block'}}>{value.name}</div>
})}
<table style={{border:'3px solid black',margin:'0 auto 0 auto'}}>
{complex.map((value,index)=>{
  return  <tr>
      <td style={{border:'1px solid black',backgroundColor:'black',color:'white'}}>{value.company}</td>
      <td style={{border:'1px solid black',backgroundColor:'gray',color:'white'}}>{value.jobs}</td>
      
      </tr>
  
})}
</table>

      </div>
  
  
)
}

export default App
