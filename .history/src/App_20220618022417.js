import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Form from './Form';

function App() {
  return (
  <Router>
    <div>
    <Switch>
    <Route path="/groom">
        <Form/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
    </div>
  </Router>
  );
}

export default App;