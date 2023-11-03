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

const changeLikes = (type : string) => {
    if(type == 'decrease'){
        if( myPost.value.likes != 0){
            myPost.value.likes-- 
        }else{
            return
        }
    }else{
        myPost.value.likes++
    }
}

const changeDislikes = (type : string) => {
    if(type == 'decrease'){
        if( myPost.value.dislikes != 0){
            myPost.value.dislikes-- 
        }else{
            return
        }
    }else{
        myPost.value.dislikes++
    }
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
            <button @click="changeLikes('decrease')"> Decrease likes</button>
            <button @click="changeLikes('')"> Increase likes</button>
            <button @click="changeDislikes('decrease')"> Decrease dislikes</button>
            <button @click="changeDislikes('')"> Increase dislikes</button>
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
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 25px;
}
.current-post__bottom input{
    width: 30%;
}
.post-input{
    flex-grow: 1;
    font-size: 18px;
}
button{
    padding: 6px;
    font-size: 18px;
    font-weight: 500;
}
</style>