import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  var a = 5;
  var style={
    color: 'blue',
    backgroundColor: 'white',
  }
  const nayoks = ['Manna', 'Riaz'];
  return (
    <div className="App">
      <header className="App-header">
        
        <p className="Sum" style={style}>
          Sum is {a + 2}
        </p>
        <Person name={nayoks[0]} naika="Sabana"></Person>
        <Person name="Omar sani" naika="Mousumi"></Person>
        <Person name="Bappa" naika="cheka"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const style = {
    border: '2px solid white',
    margin: '10px',
    padding:'10px'
  }
  // console.log(props);
 
  return (
    <div style={style}>
      <h2>Nayok: {props.name}</h2>
      <p>Hero of {props.naika}</p>
    </div>
  );
}

export default App;
