import React from 'react';

const List = (props) => {
    return <li key={props.index}>{props.text}<button onClick={()=>{props.onAddToCart(props.id)}}>Add to cart</button><button onClick={() => {
        props.onSelect(props.id)
    }}>Delete Item</button></li>
}
export default List;