import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  const [check, setCheck] = useState(false);
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddClick = () => {
    setCheck(true);
  }
  const handleChange = (event) => {
    setInputItem(event.target.value);
  }
  const handleAdditem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputItem]
    })
    setInputItem("")
  }
  const handleDelete = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }
  const handleAddToCart = () => {
    console.log("AddTocart")
    setCart((oldItems) => {
      return [...oldItems, inputItem]
    })
  } 
  const handleRemove = () => {
    console.log('Remove')
  }
  return (
    <div>
      <h1>POS APP</h1>
      <div className="App">
        <div>
          <h3>Items</h3>
          <ol>
            {items.map((value, index) => {
              return <List id={index} key={index} text={value} onSelect = {handleDelete} onAddToCart= {handleAddToCart} />
            })}
          </ol>
          <button onClick={handleAddClick}>Add New Item</button>
          {check ? <div><input type='text' onChange={handleChange} value={inputItem} /><button onClick={handleAdditem}>Add</button> </div> : null}
        </div>
        <div>
          <h3>Cart</h3>
          {cart.map((value, index)=>{
            return  <li key={index}>{value}<button onClick={handleRemove}>Remove from Cart</button></li>
          })}
        </div>
      </div>  
    </div>
  );
}

export default App;
