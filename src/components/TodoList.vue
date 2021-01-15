<template>
  <div class="list-container">
    <!-- <ul v-for="(todo, index) in getToDoList" :key="index">
      <li>{{ todo.text }}</li>
    </ul> -->
    <p>{{ getListItems }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
}
</style>
