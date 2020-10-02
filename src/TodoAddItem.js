import React, { useState } from 'react';

function TodoAddItem({ items, setter }) {

    const [todoItem, setTodoItem] = useState('');

    function handleClick() {
        let temp = [...items];
        temp.push(todoItem);
        setter(temp);
        localStorage.setItem('data', temp);
        setTodoItem('');
    }


    return (
        <div>
            <input type="text" placeholder="Enter Item To add" value={todoItem} onChange={(event) => setTodoItem(event.target.value)} />
            <button disabled={false}
                onClick={handleClick}>
                Add
            </button>
        </div>
    );
}

export default TodoAddItem;