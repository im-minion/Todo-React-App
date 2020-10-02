import React from 'react';
import './Todo.css'

function TodoContainer({ items, setter }) {

    function handleClick(event) {
        const index = event.target.value;
        let temp = [...items];
        temp.splice(index, 1);
        setter(temp);
        localStorage.setItem('data', temp);
    }

    return (
        <div>
            {
                items.map((item, index) => (
                    <div key={index} className="item-style">
                        <span >{item}</span>
                        <button value={index} onClick={handleClick}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoContainer;