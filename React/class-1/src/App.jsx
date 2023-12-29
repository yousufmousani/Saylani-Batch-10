import logo from './logo.svg';
import './App.css';

function App() {
  let arr = [
    {
      name:'PAJERO',
      Price:2000000,
     model:'2018',
      image:'https://th.bing.com/th/id/OIP.wHMeSiYarGG1ZreniaenjQHaDk?w=311&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      card:'ADD TO CARD'
    }, 
    {
      name:'COROLA',
      Price:1000000,
      model:'2020',
      image:'https://th.bing.com/th?id=OIP.A5nZV6xcQGUVlCoqTETIvwAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=3.1&pid=3.1&rm=2',
      card:'ADD TO CARD'
    }, 
    {
      name:'BMW',
      Price:1200000,
      model:'2015',
      image:'https://th.bing.com/th/id/OIP.FspfEEDx4Eqv7-IsrqaYhwHaEK?rs=1&pid=ImgDetMain',
      card:'ADD TO CARD'
    }, 
    {
      name:'AUDI',
      Price:2500000,
      model:'2011',
      image:'https://th.bing.com/th/id/OIP.1jRuwtU4shFk048Pb0racwHaEK?w=2560&h=1440&rs=1&pid=ImgDetMain',
      card:'ADD TO CARD'
    }, 
    {
      name:'PAJERO',
      Price:20000,
      model:'2023',
      image:'https://th.bing.com/th/id/OIP.wHMeSiYarGG1ZreniaenjQHaDk?w=311&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      card:'ADD TO CARD'
    },
    {
      name:'PAJERO',
      Price:20000,
      model:'2023',
      image:'https://th.bing.com/th/id/OIP.wHMeSiYarGG1ZreniaenjQHaDk?w=311&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      card:'ADD TO CARD'
    },
    {
      name:'PAJERO',
      Price:20000,
      model:'2023',
      image:'https://th.bing.com/th/id/OIP.wHMeSiYarGG1ZreniaenjQHaDk?w=311&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      card:'ADD TO CARD'
    },
    {
      name:'PAJERO',
      Price:20000,
      model:'2023',
      image:'https://th.bing.com/th/id/OIP.wHMeSiYarGG1ZreniaenjQHaDk?w=311&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      card:'ADD TO CARD'
    },
    {
      name:'PAJERO',
      Price:20000,
      model:'2023',
      image:'https://th.bing.com/th/id/OIP.wHMeSiYarGG1ZreniaenjQHaDk?w=311&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      card:'ADD TO CARD'
    },
    {
      name:'PAJERO',
      Price:20000,
      model:'2023',
      image:'https://th.bing.com/th/id/OIP.wHMeSiYarGG1ZreniaenjQHaDk?w=311&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      card:'ADD TO CARD'
    }
  ]
  return(
    <div>
      <h1>SAYLANI CAR STORE</h1>
    <table style={{margin:'50px',marginTop:'1px'}}>
    {arr.map((v,i)=>(
      <tr style={{display:'inline-block',border:'1px solid black',backgroundColor:'lightgray'}}>
        <td><img src={v.image} style={{width:'250px',margin:'1px',height:'150px'}}/></td>
        <td id='td' style={{display:'block',textAlign:'center',margin:'10px'}}>{v.name}</td>
        {/* <td id='td' style={{display:'block',textAlign:'center',margin:'10px'}}>Model : {v.model}</td> */}
        <td id='td' style={{display:'block',textAlign:'center',margin:'10px'}}>{v.Price} PKR</td>
        <button id='card' style={{display:'block',textAlign:'center',margin:'10px'}}>{v.card}</button>

      </tr>

    ))}
  </table>
  </div>
  )
}

export default App;
