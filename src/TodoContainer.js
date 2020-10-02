import React from 'react';
import './Todo.css'

function TodoContainer({ items, setter }) {
    
    function handleClick(index, event) {
        console.log(items);
        items.splice(index, 1);
        console.log(items);
        setter(items);
    }

    return (
        <div>
            {
                items.map((item, index) => (
                    <div key={index} className="item-style">
                        <span >{item}</span>
                        <button onClick={(event) => handleClick(index, event)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoContainer;