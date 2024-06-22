<template>
    <div>
        <h1>Добро пожаловать на главную страницу.</h1>
        <RouterLink :to="{ name: 'posts' }">Посты</RouterLink>
    </div>
</template>