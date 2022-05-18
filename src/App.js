import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
const { getData } = require ("./db/db");


function App() {
  return (<>
  
  


  <Button title={"Add"} disable={false} type={"add"} />
  <Button title={"Remove"} disable={false} type={"remove"} />
  <Button title={"Checkout"} disable={false} type={"checkout"} />
  
  <Card />
  </>
    
      
  );
}

export default App;
