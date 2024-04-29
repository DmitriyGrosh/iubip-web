import {useDispatch, useSelector} from "react-redux";
import {addTodo, removeTodo} from "./redux/actions.js";

export const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);
	const handleAddTodo = () => {
		const id = Math.floor(Math.random() * 1000); // Генерация случайного id
		dispatch(addTodo(id, `Задача ${id}`));
	};

	const handleRemoveTodo = (id) => {
		removeTodo(id);
	};

	return (
		<div>
			<h2>Список задач</h2>
			<button onClick={handleAddTodo}>Добавить задачу</button>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => handleRemoveTodo(todo.id)}>Удалить</button>
					</li>
				))}
			</ul>
		</div>
	);
};
