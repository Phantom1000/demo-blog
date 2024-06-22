<template>
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="post-list">
            <PostComponent v-for="post in props.posts" :key="post.id" :post="post"
                @delete-post="emit('deletePost', post.id)"></PostComponent>
        </transition-group>
    </div>
    <h2 style="color: red" v-else>Пока нет постов</h2>
</template>

<script setup lang="ts">
import PostComponent from "@/components/PostComponent.vue";

interface Post {
    id: number,
    title: string,
    body: string,
}

const props = defineProps<{
    posts: Post[]
}>();

const emit = defineEmits<{
    deletePost: [id: number]
}>();
</script>
<style scoped>
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
</style>