import { ref, computed } from 'vue'
import type { Ref } from 'vue'

interface Post {
  id: number
  title: string
  body: string
}

export const useSortedAndSearchPosts = (sortedPosts: Ref<Post[]>) => {
  const searchQuery = ref('')

  const sortedAndSearchPosts = computed<Post[]>(() =>
    sortedPosts.value.filter((post: Post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )

  return { searchQuery, sortedAndSearchPosts }
}
