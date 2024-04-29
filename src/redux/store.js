import { createStore } from 'redux';

// Инициализация состояния
const initialState = {
	todos: []
};

// Редуктор
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload]
			};
		case 'REMOVE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			};
		default:
			return state;
	}
};

// Создание хранилища
export const store = createStore(todoReducer);
