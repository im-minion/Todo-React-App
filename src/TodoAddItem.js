import React from 'react';

let textInput = React.createRef();

// let data;

function TodoAddItem(props) {
    // data = props.items;
    return (
    <div>
    <input type="text" ref={textInput} placeholder="Enter Item To add"/>
    <button disabled={false}
     onClick={() => handleClick(props.items)}>
        Add
    </button>
    </div>
    );
}

function handleClick(d) {
    console.log(textInput.current.value);
    d.push(textInput.current.value);
    textInput.current.value = null;
    console.log(d)
}

export default TodoAddItem;