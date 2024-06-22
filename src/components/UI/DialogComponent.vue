<template>
    <div class="dialog" v-show="show" @click.stop="show = false">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DialogComponent'
})
</script>

<script setup lang="ts">
const show = defineModel('show')
</script>
<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;

}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 10px;
    min-height: 50px;
    min-width: 300px;
    padding: 30px;
}
</style>