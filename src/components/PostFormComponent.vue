<template>
    <h3>Создание поста</h3>
    <form @submit.prevent="createPost">
        <InputComponent v-model="title" placeholder="Название"></InputComponent>
        <textarea v-model="body" class="input" placeholder="Описание"></textarea>
        <ButtonComponent>Создать</ButtonComponent>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits < {
    createPost: [title: string, body: string]
} > ()

const title = ref("");
const body = ref("");

const createPost = () => {
    emit('createPost', title.value, body.value)
    title.value = ''
    body.value = ''
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

button {
    margin-top: 15px;
    align-self: flex-end;
}

input,
textarea {
    margin-top: 15px;
}
</style>