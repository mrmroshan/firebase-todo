import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState(['First todo','Second todo']);
  return (
    <div className="App">
      <h1>My React todo app</h1>
      <input />
      <button>Add to do</button>
      <ul>
        {
          todos.map(todo => (
            <li>{todo}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
