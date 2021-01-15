import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      todoList: [
        {
          id: 1,
          text: 'This is the todo first',
          completed: false
        }
      ]
    };
  },
  mutations: {
    addTodo(state, payload) {
      let id = 1;
      state.todoList.push({
        id: id,
        text: payload.text,
        completed: false
      });
      id++;
    },
    editTodo(state, payload) {
      let todoToEdit = state.todoList.find(todo => todo.id === payload.id);
      todoToEdit.text = payload.text;
      state.todoList[payload.id - 1] = todoToEdit;
    },
    deleteTodo(state, payload) {
      state.todoList.unsplice(payload.id - 1, 1);
    },
    completeTodo(state, payload) {
      state.todoList[payload.id - 1].completed = true;
    }
  },
  actions: {},
  getters: {
    getListItems(state) {
      return state.todoList;
    }
  }
});

export default store;
