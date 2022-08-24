
/**
 * TodoList functional component to render the base layout for todoList
 * 
 */
import React from 'react';
import TodoInput from "./TodoInput"

const TodoList = () => {

    return (
        <div>
            Welcome to TO-DO List.<br></br>
            Please enter the task in below text area and press enter to add an TO DO action item.
            <TodoInput></TodoInput>
        </div>
    );

}

export default TodoList