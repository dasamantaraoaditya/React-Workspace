import React from "react";

const TodoItems = (props) => {
    const todoItemsList = [];

    const markItemDone = (e, key) => {
        const todoItems = props.todoListItems;
        const itemIndex = todoItems.find(item => item.id == key);
        todoItems[itemIndex.id-1]['status'] = !todoItems[itemIndex.id-1]['status'];
        props.handleTodoItemsChange(todoItems);
    };
    
    props.todoListItems.map((item) =>
        todoItemsList.push(<li key={item.id} onClick={event => markItemDone(event, item.id)}>{item.status ? <s>{item.text}</s> : <b>{item.text}</b> }</li>)
    );
    
    return (<ul>{todoItemsList}</ul>);
}

export default TodoItems;