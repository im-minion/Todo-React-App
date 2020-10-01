import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoAddItem from './TodoAddItem';
import TodoContainer from './TodoContainer';

function App() {
  let data = [];
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TodoAddItem items={data}/>
          <TodoContainer items={data} />
        </div>
      </header>
    </div>
  );
}

export default App;


