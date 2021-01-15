<template>
  <div class="container-fluid">
    <h1>Welcome to ToDo App</h1>
    <div class="container">
      <todo-input></todo-input>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoInput,
    TodoList
  },
  methods: {},
  computed: {}
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  max-width: 35rem;
  margin: 5rem auto;
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #3b5998;
}
</style>
