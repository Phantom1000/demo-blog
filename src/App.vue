<template>
  <NavbarComponent></NavbarComponent>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue"
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
