<script setup lang="ts">
import {posts} from '../utils/posts.ts'
import PostItem from '../components/post/PostItem.vue'
import { ref } from 'vue';
const myPosts = ref(posts)

const deletePost = (id) => {
  myPosts.value = myPosts.value.filter(item => item.id !== id)
}
</script>

<template>
  <main>
    <div class="container">
      <div class="posts">
        <h1>Посты</h1>
        <div class="posts__wrapper">
          <PostItem @delete="deletePost"  v-for="(item, index) in myPosts" :key="index" :post="item" :id="item.id" :can-deleted="true"/>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  h1{
    font-size: 34px;
    text-align: center;
    margin-bottom: 24px;
  }
  .posts{
    padding: 24px 0;
  }
  .posts__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
  }
</style>