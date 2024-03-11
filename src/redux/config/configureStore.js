import { configureStore } from '@reduxjs/toolkit';
import todosReducer, { __addTodo, __deleteTodo } from '../modules/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
});

export default store; // default export 추가

export { __addTodo, __deleteTodo }; // 추가된 default export와 함께 named export 유지
