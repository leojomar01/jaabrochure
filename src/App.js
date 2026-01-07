import logo from './logo.svg';
import './App.css';
import Background from './Components/Background/Background';
import Polo from './Components/Polo/Polo';
import Jersey from './Components/Jersey/Jersey';

function App() {
  return (
    <div className="App">
      {/* <Background/> */}
      <Polo/>
      <Jersey/>
    </div>
  );
}

export default App;
