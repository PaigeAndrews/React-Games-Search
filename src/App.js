import React from 'react';
import Nav from './Nav';
import './App.css';
import About from './About';
import Home from './Home';
import Games from './Games';
import ItemDetail from './ItemDetail';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
  
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/games" exact component={Games} />
      
        <Route path="/games/:id" component={ItemDetail} />
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
