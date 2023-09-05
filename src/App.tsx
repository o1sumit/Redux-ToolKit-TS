import React from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
