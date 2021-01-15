<template>
  <div class="list-container">
    <div
      class="list-item"
      v-for="(todo, index) in getListItems"
      :key="index"
      :data-id="todo.id"
      @click="processTodo(todo.id, $event)"
    >
      <input
        type="checkbox"
        name="task-completed"
        v-model="todo.completed"
        :data-id="todo.id"
        :class="{ 'todo-check-completed': todo.completed }"
      />
      <h3 :data-id="todo.id" :class="{ 'todo-text-completed': todo.completed }">
        {{ todo.text }}
      </h3>
      <button
        class="btn-edit"
        @click="performEdit(todo)"
        :data-id="todo.id"
        :class="{ 'todo-button-completed': todo.completed }"
      >
        Edit
      </button>
      <button
        class="btn-delete"
        :data-id="todo.id"
        @click="performDelete(todo)"
        :class="{ 'todo-button-completed': todo.completed }"
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
      if (!item.completed) {
        const todoText = prompt('Enter your updated todo item', item.text);
        if (todoText && todoText !== item.text) {
          this.$store.commit('editTodo', {
            id: item.id,
            value: todoText.trim()
          });
        }
      }
    },
    performDelete(item) {
      if (!item.completed) {
        this.$store.commit('deleteTodo', { value: item.id });
        console.log(this.$store.getters.getListItems);
      }
    },
    processTodo(id, e) {
      console.log(e.target);
      if (
        !e.target.classList.contains('btn-delete') &&
        !e.target.classList.contains('btn-edit')
      ) {
        this.$store.commit('completeTodo', { value: id });
      }
    }
  },
  computed: {
    ...mapGetters(['getListItems'])
  }
};
</script>

<style scoped>
.list-container {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  text-align: center;

  display: flex;
  flex-direction: column;
}

.list-item {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  align-items: center;

  transition: transform 0.5s ease-in-out;
}

.list-item:hover {
  transform: translateY(-0.2rem) scale(1.02);
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
}

h3 {
  flex: 1;
  text-align: left;
  color: #495057;
}

/* Dynamic Class Bindings */

.todo-text-completed {
  color: rgba(73, 80, 87, 0.1);
  text-decoration: line-through;
}

.todo-button-completed {
  opacity: 0.3;
}
</style>
