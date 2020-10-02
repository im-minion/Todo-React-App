import React, { useState } from 'react';
import './App.css';
import TodoAddItem from './TodoAddItem';
import TodoContainer from './TodoContainer';

function App() {
  let exisitngTodos = [];
  if (localStorage.getItem('data')) {
    exisitngTodos = localStorage.getItem('data').split(',');
  }
  const [data, setData] = useState(exisitngTodos);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TodoAddItem items={data} setter={setData} />
          <TodoContainer items={data} setter={setData} />
        </div>
      </header>
    </div>
  );
}

export default App;
