<script setup>
import { ref, watch } from 'vue'
import PostItem from "../components/post/PostItem.vue";
import { myUserPosts } from "../utils/posts.ts";

const user = ref({
  name: "John",
  email: "johndoe@example.com",
  joinedDate: "2023-01-15",
  posts: [...myUserPosts],
});

const nameVal = ref('')
const emailVal = ref('')
const dateVal = ref('')


watch(nameVal, (value) => {
    user.value.name = value
})
watch(emailVal, (value) => {
    user.value.email = value
} )
watch(dateVal, (value) => {
    user.value.joinedDate = value
} )
</script>

<template>
  <div class="profile">
    <h1>Profile Page</h1>
    <div class="profile-header">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <p>Joined: {{ user.joinedDate }}</p>
    </div>

    <div class="change-input">
        <input v-model="nameVal" type="text" placeholder="change name">
        <input v-model="emailVal" type="text" placeholder="change email">
        <input v-model="dateVal" type="date" placeholder="change date" >

    </div>
    <div class="profile-body">
      <h2>My Posts</h2>
      <ul class="post-list">
        <li v-for="post in user.posts" :key="post.id" class="post">
          <div class="post__header">
            <h2>{{ post.name }}</h2>
            <span>{{ post.time.split("T").join(" ") }}</span>
          </div>
          <div class="post__body">
            <p>{{ post.text }}</p>
          </div>
          <div class="post-bottom">
            <span>Likes {{ post.likes }}</span>
            <span>Dislikes {{ post.dislikes }}</span>
            <button
              @click.native.prevent="emit('delete', id)"
              v-if="canDeleted">
              delete post
            </button>
          </div>
        </li>
        <!-- <PostItem @click.native.prevent v-for="post in user.posts" :post ="post" :id="post.id"  :key="post.id" class="post-item"/> -->
      </ul>
    </div>
  </div>
</template>

<style scoped>
.profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-header h1 {
  font-size: 32px;
  font-weight: bold;
}

.profile-header p {
  font-size: 18px;
}

.profile-body h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.post-list {
  list-style: none;
  padding: 0;
}


.post {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  text-decoration: none;
  border: 3px solid #f5f5f5;
  padding: 12px;
  margin: 12px 0;
}
.post__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.post__header h2 {
  font-size: 24px;
  font-weight: 600;
}
.post__header span {
  font-size: 24px;
}
.post__body {
  text-align: left;
  padding: 16px 0;
}
.post__body p {
  font-size: 24px;
}
.post-bottom {
  display: flex;
  justify-content: space-evenly;
}
.post-bottom span {
  font-size: 18px;
  padding: 6px 8px;
}

.change-input{
    display: flex;
    gap: 12px;
    margin: 12px 0;
}
.change-input input {
    flex:1;
}
</style>
