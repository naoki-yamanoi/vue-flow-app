<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/flow">flow</RouterLink>
  </div>
</template>

<style scoped>
div {
  background-color: aqua;
  padding: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
