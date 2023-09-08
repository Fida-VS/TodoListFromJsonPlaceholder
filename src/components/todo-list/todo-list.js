import { useState, useEffect } from 'react';
import styles from './todo-list.module.css';
import { Todo } from '../todo/todo';

export const TodoList = () => {

	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
		 .then(response => response.json())
		 .then((loadedTodos) => {
			setTodos(loadedTodos);
		 }, []);
	});

	return (
		<ul className={styles.todoList}>
			{todos.map(({id, title}) => (
				<Todo key={id} title={title} />
			))}
		</ul>
	);
};
