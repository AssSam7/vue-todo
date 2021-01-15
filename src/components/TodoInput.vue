<template>
  <div class="input-container">
    <h2>Welcome</h2>
    <h4>To get started, add some items to your list:</h4>
    <div class="">
      <form action="">
        <input type="text" name="todo" id="todo" v-model="todoItem" />
        <button class="add-todo" @click="addTodo({ text: todoItem })">
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      todoItem: ''
    };
  },
  computed: {
    ...mapMutations(['addTodo'])
  }
};
</script>

<style scoped>
.input-container {
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
}
</style>
