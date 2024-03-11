import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { waitTwoSeconds } from '../../utils';

// 할 일을 추가하는 비동기 thunk 생성
export const __addTodo = createAsyncThunk(
  '__addTodo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds(); // 2초의 딜레이
    return payload; // payload를 반환합니다
  }
);

// 할 일을 삭제하는 비동기 thunk 생성
export const __deleteTodo = createAsyncThunk(
  '__deleteTodo',
  async (id, thunkAPI) => {
    await waitTwoSeconds(); // 2초의 딜레이
    return id; // id를 반환합니다
  }
);

// 초기 상태 정의
const initialState = {
  list: [],
};

// todos 슬라이스 생성
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // 할 일을 추가하는 리듀서
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    // 할 일을 삭제하는 리듀서
    deleteTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(__addTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

// 액션 생성자 내보내기
export const { addTodo, deleteTodo } = todosSlice.actions;

// 리듀서 내보내기
export default todosSlice.reducer;
