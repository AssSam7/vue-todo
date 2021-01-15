import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootGetters from './getters.js';

const store = createStore({
  state() {
    return {
      todoList: [
        {
          id: new Date().getTime(),
          text: 'This is the todo first',
          completed: false
        }
      ]
    };
  },
  mutations: rootMutations,
  getters: rootGetters
});

export default store;
