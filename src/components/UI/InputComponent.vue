<template>
    <input v-model="field" class="input" type="text" placeholder="Название" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputComponent'
})
</script>

<script setup lang="ts">
const field = defineModel()
</script>

<style>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    border-radius: 5px;
}
</style>