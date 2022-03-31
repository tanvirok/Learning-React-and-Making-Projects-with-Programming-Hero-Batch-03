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
  