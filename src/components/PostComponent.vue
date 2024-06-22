<template>
    <div class="post">
        <div>
            <div>{{ props.post.id }}</div>
            <div><strong>Название:</strong>{{ props.post.title }}</div>
            <div><strong>Описание:</strong>{{ props.post.body }}</div>
        </div>
        <div class="post__btns">
            <button-component
                @click="$router.push({ name: 'post', params: { id: props.post.id } })">Открыть</button-component>
            <ButtonComponent @click="emit('deletePost')">Удалить</ButtonComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Post {
    id: number,
    title: string,
    body: string,
}

const emit = defineEmits<{
    deletePost: []
}>()

const props = defineProps<{
    post: Post
}>();
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post__btns {
    display: flex;
}
</style>