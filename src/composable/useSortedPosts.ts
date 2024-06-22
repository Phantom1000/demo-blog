import { ref, computed } from 'vue'
import type { Ref } from 'vue'

interface Post {
  id: number
  title: string
  body: string
}

enum SortOption {
  Id = 'id',
  Title = 'title',
  Body = 'body'
}

export const useSortedPosts = (posts: Ref<Post[]>) => {
  const selectedSort: Ref<SortOption> = ref(SortOption.Id)

  const sortedPosts = computed<Post[]>(() =>
    [...posts.value].sort((post1: Post, post2: Post) => {
      switch (selectedSort.value) {
        case SortOption.Body:
        case SortOption.Title:
          return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
        default:
          return post1[selectedSort.value] - post2[selectedSort.value]
      }
    })
  )

  // watch(selectedSort, (value) => {
  //   posts.value.sort((post1, post2) => post1[value]?.localeCompare(post2[value]))
  // })
  return { selectedSort, sortedPosts }
}
