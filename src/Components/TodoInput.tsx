import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/Todos/todoSlice';

const TodoInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(
                addTodo({
                    id: Date.now(),
                    text,
                    completed: false,
                })
            );
            setText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new todo"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default TodoInput;
