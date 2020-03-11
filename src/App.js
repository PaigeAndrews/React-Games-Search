import React from 'react';
import Nav from './Nav';
import Shop from './Shop';
import './App.css';
import About from './About';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} key={item.id}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home </h1>
  </div>
);

export default App;
