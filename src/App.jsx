import React from "react";
import Counter from "./features/counter/Counter";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Readux</h1>
      <h2>Count:</h2>
      <Counter />
    </div>
  );
};

export default App;
