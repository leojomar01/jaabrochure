import './App.css';
import Polo from './Components/Polo/Polo';
import Jersey from './Components/Jersey/Jersey';
import Nav from './Components/Nav/Nav';
import Ads from './Components/Ads/Ads';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Background from './Components/Background/Background';

function App() {
  return (
    <Router>
      <div className="App">
        <Ads />
        <Nav />

        <Routes>
          <Route path="/" element={<Background/>} />
          <Route path="/poloshirt" element={<Polo />} />
          <Route path="/jersey" element={<Jersey />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
