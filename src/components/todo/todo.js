import styles from './todo.module.css'

export const Todo = ({title}) => {
	return (
		<li className={styles.todo}>
			{title}
		</li>
	);
};
