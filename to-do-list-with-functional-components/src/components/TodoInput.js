/**
 * The input component for todo action
 */

import React from 'react';
import { useState } from "react";
import TodoItems from './TodoItems';

const TodoInput = (props) => {

    const [todoInput, setTodoInput] =  useState("");
    const [todoListItems, setTodoListItems] = useState([{"id":1, "text":"car wash", "status": false},{"id":2, "text":"collect garbage", "status": true}]);

    function handleTodoInput(e){
        setTodoInput(e.currentTarget.value)
    }

    function handleTodoInputEnter(e){
        if(e.key === 'Enter' && todoInput){
            todoListItems.push({"id":todoListItems.length+1 , "text":todoInput, "status": false});
            handleTodoItemsChange(todoListItems);
            setTodoInput("");
        }
    }

    const handleTodoItemsChange = (todoItems) => {
        setTodoListItems([...todoItems]);
    };

    return (
        <div>
            <input type="text" placeholder="Your to do action item ..." value={todoInput} onChange={handleTodoInput} onKeyDown={handleTodoInputEnter}></input>
            <div>
                <TodoItems todoListItems={todoListItems} handleTodoItemsChange={handleTodoItemsChange}></TodoItems>
            </div>
        </div>
    );
}

export default TodoInput;