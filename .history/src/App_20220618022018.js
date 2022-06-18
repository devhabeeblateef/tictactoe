import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
  <Router>
    <div>
    <Switch >
      <Home/>
    </div>
  </Router>
  );
}

export default App;