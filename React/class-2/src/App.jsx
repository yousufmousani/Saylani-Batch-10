import logo from './logo.svg';
import './App.css';
import Header from './componenets/Header/Header';
import Footer from './componenets/Header/Footer/Footer';

function App() {
  return(
   <div style={{textAlign:'center',backgroundColor:'black',color:'white',marginTop:'100px'}}>
   <Header/>
   <br/>
   <h1>Text</h1>
   <br/>
   <Footer/>
   </div>
 ) 
}

export default App;

