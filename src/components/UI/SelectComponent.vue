<template>
    <select v-model="field">
        <option value="" disabled>Выберите из списка</option>
        <option v-for="option in props.options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SelectComponent'
})
</script>

<script setup lang="ts">
export interface option {
    name: string,
    value: string,
}

const field = defineModel()

const props = withDefaults(defineProps<{
    options: option[]
}>(), { options: () => [] })
</script>

<style></style>