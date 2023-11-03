<script setup lang="ts">
import { useRoute } from 'vue-router';
import {posts} from '../utils/posts.ts'
import { computed, ref } from 'vue';
import PostItem from '../components/post/PostItem.vue'
const route = useRoute();
let myPost = ref(posts.filter(item => item.id == +route.params.id)[0]) 
const text = ref('')
const changePostHandler = () => {
    myPost.value.text = text.value
}
</script>

<template>
  <div>
    <div class="container">
        <div class="current-post">
            <PostItem  :post="myPost" :id="myPost.id"/>
        </div>
        <div class="current-post__bottom">
            <input class="post-input" type="text" v-model="text" placeholder="Change text of post">
            <button @click="changePostHandler"> change post text</button>
            <button @click="myPost.likes--"> Decrease likes</button>
            <button @click="myPost.likes++"> Increase likes</button>
            <button @click="myPost.dislikes--"> Decrease dislikes</button>
            <button @click="myPost.dislikes++"> Increase dislikes</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.current-post{
    margin-top: 25px;
    display: flex;
    justify-content: center;
}
.current-post__bottom{
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 25px;
}
.current-post__bottom input{
    width: 30%;
}
</style>