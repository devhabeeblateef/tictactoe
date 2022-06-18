import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Form from './Form';
import BrideForm from './BrideForm';

function App() {
  return (
  <Router>
    <div>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/groom">
        <Form/>
      </Route>
      <Route path="/bride">
        <BrideForm/>
      </Route>
    </Switch>
    </div>
  </Router>
  );
}

export default App;