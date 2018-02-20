import React from 'react';
import style from '../containers/App.css';

class TodoList extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const items = this.props.todoList.map((item) => 
				<button key={item.id} onClick={() => this.props.removeTodo(item.id)}> {item.id} - {item.text} </button>
			);
		return (
			<div className={style.TodoList}>
				{items}
			</div>
		);
	}
}

export default TodoList;