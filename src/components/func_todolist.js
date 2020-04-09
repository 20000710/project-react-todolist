import React, { useState } from 'react';
import Home from './Home';
import '../App.css';

function Todolist() {
    const [Input, setInput] = useState({
        todoInput: ""
    });

    const [TodoList, setTodoList] = useState([]);


    const handleChange = (event) => {
        setInput({
            [event.target.name] : event.target.value
        })
    }

    const handleClick = () =>{
       setTodoList([...TodoList, Input.todoInput])
       Input.todoInput = ""
    }

    const handleDelete = (index) =>{
        const list = [...TodoList];
        list.splice(index, 1)
        setTodoList(list);
    }

    const handleEdit = (index) =>{
        const list = [...TodoList];
        const editLists = list[index];
        
        const editList = prompt(editLists);
        list.splice(index, 1, editList)
        setTodoList(list);
    }

    return (
        <div>
            <Home/>
            <h1>Function Based</h1>
            <input type="text" name="todoInput" value={Input.todoInput} onChange={handleChange}/>

            <button onClick={handleClick}>ADD</button>
            
            {TodoList.map((item, index) =>(
                <div className="list">
                <li key={index}>{item}
                <button onClick={() => {handleDelete(index)}}>DELETE</button>
                <button onClick={() => {handleEdit(index)}}>Edit</button>
                </li>
                </div>
            ))}
            
        </div>
    )
}

export default Todolist;
