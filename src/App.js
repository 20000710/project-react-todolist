import React from 'react';
import Todo from './components/todolist';
import './App.css';
import Todolist from './components/func_todolist';


function App() {
  return (
    <div className="App">
      <Todo/>
      <Todolist/>
    </div>
  );
}

export default App;
