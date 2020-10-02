import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoAddItem from './TodoAddItem';
import TodoContainer from './TodoContainer';

function App() {
  const [data, setData] = useState([]);
  console.log(data);
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
