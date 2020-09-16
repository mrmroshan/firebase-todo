import React, { useState } from 'react';
import './App.css';

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
      <input value={input} onChange={ e => setInput(e.target.value)}/>
      <button type="submit" onClick={addTodo}>Add to do</button>
      </form>
      <ul>
        {
          todos.map((todo,i) => (
            <li key={i}>{todo}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
