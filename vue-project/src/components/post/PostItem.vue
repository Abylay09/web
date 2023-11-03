<script setup lang="ts">
import {IPosts} from "../../utils/posts"
interface PostProps{
    post: IPosts
    id: number
    canDeleted?: boolean
}
const emit = defineEmits(['delete'])
const props = defineProps<PostProps>()
</script>

<template>
    <RouterLink :to="`/posts/${id}`" class="post">
            <div class="post__header">
                <h2 >{{ post.name }}</h2>
                <span>{{ post.time.split('T').join(' ') }}</span>
            </div>
            <div class="post__body">
                <p>{{ post.text }}</p>
            </div>
            <div class="post-bottom">
                <span>Likes {{ post.likes }}</span>
                <span>Dislikes {{ post.dislikes }}</span>
                <button @click.native.prevent="emit('delete',id)" v-if="canDeleted">delete post</button>
            </div>
    </RouterLink>
</template>

<style scoped>

    .post{
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        text-decoration: none;
        border: 2px solid #f5f5f5;
        padding: 12px;
    }
    .post__header{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .post__header h2{
        font-size: 24px;
        font-weight: 600;
    }
    .post__header span{
        font-size: 24px;
    }
    .post__body{
        text-align: left;
        padding: 16px 0;
    }
    .post__body p{
        font-size: 24px;
    }
    .post-bottom{
        display: flex;
        justify-content: space-evenly;
    }
    .post-bottom span{
        font-size: 18px;
        padding: 6px 8px;
    }
</style>