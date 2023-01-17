import './App.css';
import pic from "./deliveryman.webp";
import { List } from './List';


function App() {
  return (
    <div className="App">
      <div className='head'>
      <h1>Grocery List</h1>
      </div>
      <List/>
      <div className='head'>
      <img src={pic} alt="man" width="250px"/>
      </div>
    </div>
  );
}

export default App;
