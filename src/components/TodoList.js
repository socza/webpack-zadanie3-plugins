import React from 'react';
import style from '../containers/App.css';

const TodoList = props => {
    
    const todoListItems = props.todoList.map( item => <p> {item.id} {item.text} </p>)
        return(
            <div className={style.TodoList}>{todoListItems}</div>
        )
}

export default TodoList;