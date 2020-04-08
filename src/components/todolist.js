import React, { Component } from 'react';

class Todo extends Component {
  constructor(){
    super()
    this.state = {
      todoList: [],
      todoInput: "",
    }
  }

  handleChange = (event, name) => {
    console.log("event", event.target)
    console.log("name", name)


    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.todoInput],
      todoInput: ""
    })
  }

  handleDelete = (index) =>{
    const list = this.state.todoList;
    list.splice(index, 1)
    this.setState(list)
  }

  render() {

    return (
      <div>
        <h1>Todo List</h1>
        <h1>Class Based</h1>
        <input type="text" name="todoInput" value={this.state.todoInput} onChange={(event) => this.handleChange(event, "hallo")} />
        
        <button onClick={this.handleClick}>ADD</button>
        
        {this.state.todoList.map((item, index) => (
        <div className="list">
          <li key={index}>{item} <button onClick={this.handleDelete}>DELETE</button></li>
        </div>
        ))}
        
      </div>
      
    );
  }
}

export default Todo;