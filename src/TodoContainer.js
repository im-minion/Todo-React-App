import React from 'react';
import './Todo.css'


function TodoContainer(props) {
    return (
        <div>
            {
                props.items.map(
                    item => (
                        <div className="item-style">
                            <span>{item}</span>
                            <button>Delete</button>
                        </div>
                    ))
            }
        </div>
    )
}

export default TodoContainer;