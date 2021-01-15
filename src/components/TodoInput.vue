<template>
  <div class="input-container">
    <h2>Welcome</h2>
    <h4>To get started, add some items to your list:</h4>
    <div class="">
      <form action="" @submit.prevent="addListItem">
        <input type="text" name="todo" id="todo" v-model.trim="todoItem" />
        <button class="add-todo">
          Add
        </button>
      </form>
    </div>
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
</style>
