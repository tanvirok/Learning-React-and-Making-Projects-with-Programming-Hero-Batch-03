                      //Module : 32
// Video No - 06 (=== The way to make components by React and making simple design with pass dynamic data basic way ===)                    
function App() {
  return (
    <div className="App">
        <Person name= "Zayan" food="Biriani"></Person>  
        <Person name= "Rayhan" food= "Chocolate"></Person>
        <Person name= "Ahmed Zubayer" food="Frutes"></Person>
    </div>
  );
}

function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  };
  return  (
    <div style={personStyle}>
        <h1>Name: {props.name}</h1>
        <h3>Best food of the Year {props.food}</h3>
    </div>
  );
}

export default App;

// Video No - 07  (=== The way to make components by React and making design with pass dynamic data efficient way ===)
function App() {
    const products = [
      {name: 'Photoshop', price: '$90.99'},
      {name: 'Illustrator', price: '$60.99'},
      {name: 'PDF Reader', price: '$6.99'}
    ];
    return (
      <div className="App">
          <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product>
      </div>
    );
  }
  
  function Product(props){
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      height: '200px',
      width: '200px',
      float: 'left'
    };
    const {name, price} = props.product;
    return  (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h1>{price}</h1>
        <button>Buy Now</button>
      </div>
    );
  }
  
  export default App;


// Video No - 08 (==== The way to show array dynamically that means most efficient way====)
function App() {
  const nayoks = ['Razzak','Jasim', 'Alomgir', 'Salman', 'Kader', 'Raju']

  return (
    <div className="App">
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
    </div>
  );
}


export default App;

// ======= The way to show object's value dynamically that means most efficient way ====
function App() {

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  return (
    <div className="App">
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
    </div>
  );
}

export default App;

// ======= The way to make components dynamically that means most efficient way ====
function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
        <ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
        </ul>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

export default App;

// Video No - 11 (====== Increase, Decrease state management by React ======)
function App() {
  const nayoks = ['Razzak','Jasim', 'Alomgir', 'Salman', 'Kader', 'Raju']

  return (
    <div className="App">
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        <Counter />
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  // const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleDecrease}>Decrease</button> */}  
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App;

// Video No - 12 (====== The way to load data from the server to local machine by React ======)
function App() {
  const nayoks = ['Razzak','Jasim', 'Alomgir', 'Salman', 'Kader', 'Raju']

  return (
    <div className="App">
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        <Counter></Counter>
        <Users></Users>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  // const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleDecrease}>Decrease</button> */}  
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;


                  // Module : 33
// Video No - 06  (=== The way to declare State (useState) with detailed explanation ===)
import React, {useState} from 'react';

function App() {
  const userInfo = [
      {name: 'Tanvir', level: 'Ten'},
      {name: 'Zubayer', level: 'Nine'},
      {name: 'Mashrafi', level: 'Eight'}
  ];

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <ul>
        {
          userInfo.map(users => <Users users={users}></Users>)
        }  
      </ul>            
    </div>
  );
}

function Users(props){
  const userStyle = {
      width: '200px',
      height: '150px',
      border: '2px solid black',
      textAlign: 'center',
      background: 'gray',
      color: 'white',
      margin: '10px'
  };
  const {name, level} = props.users;
  return (
      <div style={userStyle}>
          <h2>{name}</h2>
          <h5>{level}</h5>
      </div>
  );
}

function MovieCounter(){
  // const result = ['Arif', 'Azad']
  // const first = result[0];
  // const secound = result[1];
  // console.log(first, secound);

  // const [first, secound] = ['Arif', 'Azad'] 
  // console.log(first, secound);

  const [count, setCount] = useState(0);
  console.log(count, setCount);  

  return (
    <div>
      <button>Add Movie</button>
      <h3>Number of Movies: </h3>
    </div>
  )
}

export default App;

              
// Video No - 07  (=== State Management Clear Concept with Practically ===)
import React, {useState} from 'react';

function App() {
  const userInfo = [
      {name: 'Tanvir', level: 'Ten'},
      {name: 'Zubayer', level: 'Nine'},
      {name: 'Mashrafi', level: 'Eight'}
  ];

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <ul>
        {
          userInfo.map(users => <Users users={users}></Users>)
        }  
      </ul>            
    </div>
  );
}

function Users(props){
  const userStyle = {
      width: '200px',
      height: '150px',
      border: '2px solid black',
      textAlign: 'center',
      background: 'gray',
      color: 'white',
      margin: '10px'
  };
  const {name, level} = props.users;
  return (
      <div style={userStyle}>
          <h2>{name}</h2>
          <h5>{level}</h5>
      </div>
  );
}

function MovieCounter(){
  const movieStyle={
    margin: '20px',
    textAlign: 'center'
  }
  // const result = ['Arif', 'Azad']
  // const first = result[0];
  // const secound = result[1];
  // console.log(first, secound);

  // const [first, secound] = ['Arif', 'Azad'] 
  // console.log(first, secound);

  const [count, setCount] = useState(5);  
  const handleClicked = () => setCount(count + 1);

  return (
    <div style={movieStyle}>
      <button onClick={handleClicked}>Add Movie</button>
      <h3>Number of Movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}

export default App;



              
// Video No - 10  (=== The way to load data from the API to local machine by React. And Discussion about the Key error in console with solution ===)
import React, {useState, useEffect} from 'react';

function App() {
   const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => setUserInfo(data))
    }, [])

  // const userInfo = [
  //     {name: 'Tanvir', age: 'Ten'},
  //     {name: 'Zubayer', age: 'Nine'},
  //     {name: 'Mashrafi', age: 'Eight'}
  // ]

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <ul>
        {
          userInfo.map(usr => <Users name={usr.name} key={usr.id} city={usr.address.city}></Users>)
        }  
      </ul>            
    </div>
  );
}

function Users(props){
  const userStyle = {
      width: '200px',
      height: '150px',
      border: '2px solid black',
      textAlign: 'center',
      background: 'gray',
      color: 'white',
      margin: '10px'
  };
  // const {name, age} = props.users;
  return (
      <div style={userStyle}>
          <h2>{props.name}</h2>
          <h4>City: {props.city}</h4>
      </div>
  );
}

function MovieCounter(){
  const movieStyle={
    margin: '20px',
    textAlign: 'center'
  }
  // const result = ['Arif', 'Azad']
  // const first = result[0];
  // const secound = result[1];
  // console.log(first, secound);

  // const [first, secound] = ['Arif', 'Azad'] 
  // console.log(first, secound);

  const [count, setCount] = useState(5);  
  const handleClicked = () => setCount(count + 1);

  return (
    <div style={movieStyle}>
      <button onClick={handleClicked}>Add Movie</button>
      <h3>Number of Movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}

export default App;
