import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../features/todos/todoSlice';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Todo;
