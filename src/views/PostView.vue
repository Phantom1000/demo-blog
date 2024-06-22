<template>
    <div>
        <h1>Страница с постами</h1>
        <InputComponent v-model="searchQuery" v-focus placeholde="Поиск..."></InputComponent>
        <div class="app__btns">
            <ButtonComponent @click="showForm = true">Добавить пост</ButtonComponent>
            <SelectComponent v-model="selectedSort" :options="options"></SelectComponent>
        </div>

        <DialogComponent v-model:show="showForm">
            <PostFormComponent @create-post="addPost"></PostFormComponent>
        </DialogComponent>


        <PostListComponent :posts="sortedAndSearchPosts" @delete-post="deletePost"></PostListComponent>
        <div v-intersection="loadPosts" class="observer"></div>
        <div class="page__wrapper">
            <div v-for="page in totalPages" :key="page" class="page" :class="{ 'current-page': page === currentPage }"
                @click="changePage(page)">
                {{ page }}
            </div>
        </div>
        <div v-show="isLoadingPosts">Загрузка...</div>
    </div>
</template>

<script setup lang="ts">
import PostFormComponent from "@/components/PostFormComponent.vue";
import PostListComponent from "@/components/PostListComponent.vue";
import { usePosts } from "@/composable/usePosts";
import { useSortedPosts } from "@/composable/useSortedPosts";
import { useSortedAndSearchPosts } from "@/composable/useSortedAndSearchPosts";
import { ref, watch, onMounted } from "vue";

const showForm = ref(false);


const options = [
    { name: "По ID", value: "id" },
    { name: "По названию", value: "title" },
    { name: "По содержимому", value: "body" },
];

const {
    posts,
    fetchPosts,
    loadPosts,
    error,
    createPost,
    deletePost,
    isLoadingPosts,
    totalPages,
    currentPage,
} = usePosts();

const { selectedSort, sortedPosts } = useSortedPosts(posts)

const { searchQuery, sortedAndSearchPosts } = useSortedAndSearchPosts(sortedPosts)

fetchPosts();

watch(error, () => {
    alert(error.value);
});

// watch(posts, () => {
//   showForm.value = false;
// }, {deep: true});

const changePage = (page: number) => {
    currentPage.value = page;
    fetchPosts();
};

const addPost = (title: string, body: string) => {
    showForm.value = false;
    createPost(title, body);
};

onMounted(() => {

});
</script>

<style>
.app__btns {
    margin: 15px;
    display: flex;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    margin: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
    margin-left: 10px;
}

.current-page {
    border: 2px solid teal;
}

.observer {
    height: 30px;
    background: green;
}
</style>