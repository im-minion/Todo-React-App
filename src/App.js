import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoAddItem from './TodoAddItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TodoAddItem />
        </div>
      </header>
    </div>
  );
}

export default App;
