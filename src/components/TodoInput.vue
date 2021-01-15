<template>
  <div class="input-container">
    <form action="" @submit.prevent="addListItem">
      <input type="text" name="todo" id="todo" v-model.trim="todoItem" />
      <button class="add-todo">
        Add new Item
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItem: ''
    };
  },
  methods: {
    addListItem() {
      if (this.todoItem) {
        this.$store.commit('addTodo', { value: this.todoItem });
        this.todoItem = '';
        console.log(this.$store.getters.getListItems);
      }
    }
  }
};
</script>

<style scoped>
.input-container {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
}

form {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

input[type='text'] {
  flex: 1;
  padding: 0.5rem;
  margin-right: 1rem;
  border: 3px solid #ced4da;
  border-radius: 5px;
  outline: none;
}

input[type='text']:focus {
  border-color: #80bdff;
}

.add-todo {
  cursor: pointer;
  flex-basis: 15%;
  border: 0;
  border-radius: 5px;
  outline: none;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  font-size: 0.9rem;
}

.add-todo:hover {
  background-color: rgba(0, 123, 255, 0.8);
}
</style>
