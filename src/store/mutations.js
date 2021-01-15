// import { uuid } from 'vue-uuid';

export default {
  addTodo(state, payload) {
    // let newId = state.todoList.length ? state.todoList.length : 0;
    state.todoList.push({
      id: new Date().getTime(),
      text: payload.value,
      completed: false
    });
  },
  editTodo(state, payload) {
    const index = state.todoList.findIndex(todo => todo.id === payload.id);
    state.todoList[index].text = payload.value;
  },
  deleteTodo(state, payload) {
    const index = state.todoList.findIndex(todo => todo.id === payload.value);
    state.todoList.splice(index, 1);
  },
  completeTodo(state, payload) {
    state.todoList[payload.id - 1].completed = true;
  }
};
