import React, { useState } from 'react';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos,setTodos] = useState(['First todo','Second todo']);
  const [input,setInput] = useState('');
  

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos,input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>My React todo app</h1>
      <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Add todo:</InputLabel>
        <Input id="my-input" value={input} onChange={ e => setInput(e.target.value)} />       
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add to do
        </Button>
      </form>
      
      <ul>
        {
          todos.map((todo,i) => (
           <Todo key={i} todo={todo}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
