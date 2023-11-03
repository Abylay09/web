<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="header">
      <nav class="header-menu">
        <RouterLink class="header__link" to="/">Posts</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
      </nav>  
  </header>
  </div>
  <RouterView />
</template>

<style scoped>
.header{
  background: #89CFF0;
  padding: 12px 0;
}
.header nav{
  display: flex;
  justify-content: space-around;
}
.header-menu a{
      font-family: Arial, Helvetica, sans-serif;
      text-decoration: none;
      color: black;
      font-weight: 500;
}
.header-menu a:hover{
  text-decoration: underline;
}
</style>
