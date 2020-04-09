import React from 'react';
import Todo from './components/todolist';
import './App.css';
import Todolist from './components/func_todolist';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/class">
          <Todo/>
        </Route>
        <Route path="/function">
          <Todolist/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
