<template>
    <div class="navbar">
        <div class="navbar__btns">
            <button-component @click="$router.push({ name: 'main' })">Главная</button-component>
            <button-component @click="$router.push({ name: 'posts' })" class="navbar__btn">Посты</button-component>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px, 2px, 4px, gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__btn {
    margin-left: 20px;
}
</style>