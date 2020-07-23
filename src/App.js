import React,{useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  var a = 5;
  var style={
    color: 'blue',
    backgroundColor: 'white',
  }
  const nayoks = ['Manna', 'Riaz','Shuvo'];
  const products = [
    { name: 'Photoshop', price: '$99.90' },
    { name: 'Illustrator', price: '$80.99' },
    {name:'Pdf reader',price:'$60.00'}
  ]
  // const productNames = products.map(product => product.name);
  // console.log(productNames);


  return (
    <div className="App">
      <header className="App-header">
        {/* <p className="Sum" style={style}>
          Sum is {a + 2}
        </p> */}
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li> */}
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        <Person name={nayoks[0]} naika="Sabana"></Person>
        <Person name="Omar sani" naika="Mousumi"></Person>
        <Person name="Bappa" naika="cheka"></Person>
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float:'left'
  }
  const { name, price } = props.product;
  // console.log(name,price);
  // console.log(props);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
function Person(props) {
  const style = {
    border: '2px solid white',
    margin: '10px',
    padding: '10px'
  }
  
  return (
    <div style={style}>
      <h2>Nayok: {props.name}</h2>
      <p>Hero of {props.naika}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic users</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
