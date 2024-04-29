// Генераторы действий

// Добавление задачи
export const addTodo = (id, text) => {
	return {
		type: 'ADD_TODO',
		payload: { id, text }
	};
};

// Удаление задачи
export const removeTodo = (id) => {
	return {
		type: 'REMOVE_TODO',
		payload: id
	};
};
