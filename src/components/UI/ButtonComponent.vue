<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonComponent'
})
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    border-radius: 5px;
}


.btn:hover {
    background-color: rgb(223, 223, 223);
}

.btn:active {
    background-color: rgb(196, 196, 196);
}
</style>