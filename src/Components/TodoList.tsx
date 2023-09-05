import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div>
            {todos.map((todo: { id: React.Key | null | undefined; }) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
