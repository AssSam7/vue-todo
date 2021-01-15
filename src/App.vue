<template>
  <div class="container-fluid">
    <h1>Welcome to Todo App 👋</h1>
    <div class="container">
      <todo-input></todo-input>
      <todo-list></todo-list>
    </div>
    <footer>
      Made using Vue + Vuex -
      <a href="https://github.com/AssSam7/vue-todo" target="_blank">@AssSam7</a>
    </footer>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoInput,
    TodoList
  }
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
  background: linear-gradient(to right, #b6fbff, #83a4d4);
}

.container {
  max-width: 50rem;
  margin: 3rem auto;
}

h1 {
  margin-top: 3rem;
  color: #222;
  text-align: center;
  font-size: 2rem;
  font-family: 'Tahoma';
  font-weight: 400;
}

a {
  color: #18bc9c;
  text-decoration: none;
  background-color: initial;
  transition: all 0.1s ease-in-out;
}

a:hover {
  color: #0f7864;
  text-decoration: underline;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem;
  text-align: center;
  color: #212529;
  font-family: 'Tahoma';
}
</style>
