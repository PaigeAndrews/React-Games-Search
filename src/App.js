import React from 'react';
import Nav from './Components/Nav';
import './Styles/App.css';
import Home from './Components/Home';
import Games from './Components/Games';
import ItemDetail from './Components/ItemDetail';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/games" exact component={Games} />
        <Route path="/games/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
