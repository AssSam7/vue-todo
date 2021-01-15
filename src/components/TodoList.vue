<template>
  <div class="list-container">
    <div
      class="list-item"
      v-for="(todo, index) in getListItems"
      :key="index"
      :data-id="todo.id"
    >
      <input
        type="checkbox"
        name="task-completed"
        v-model="todo.completed"
        :data-id="todo.id"
      />
      <h3 :data-id="todo.id">{{ todo.text }}</h3>
      <button class="btn-edit" @click="performEdit(todo)" :data-id="todo.id">
        Edit
      </button>
      <button
        class="btn-delete"
        :data-id="todo.id"
        @click="performDelete(todo.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      editItemId: 0
    };
  },
  methods: {
    performEdit(item) {
      const todoText = prompt('Enter your updated todo item', item.text);
      if (todoText && todoText !== item.text) {
        this.$store.commit('editTodo', { id: item.id, value: todoText.trim() });
      }
    },
    performDelete(id) {
      this.$store.commit('deleteTodo', { value: id });
      console.log(this.$store.getters.getListItems);
    }
  },
  computed: {
    ...mapGetters(['getListItems'])
  }
};
</script>

<style scoped>
.list-container {
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
}

.list-item {
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.btn-edit,
.btn-delete {
  padding: 0 2rem;
  cursor: pointer;
  flex-basis: 10%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 5px;
  outline: none;
}

.btn-edit {
  margin-right: 0.7rem;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-delete {
  margin-right: 1rem;
}

.btn-delete {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

input[type='checkbox'] {
  flex-basis: 10%;
  transform: scale(2.2);
  -ms-transform: scale(2.2);
  -webkit-transform: scale(2.2);
  /* padding: 10px; */
}

h3 {
  flex: 1;
  text-align: left;
}
</style>
