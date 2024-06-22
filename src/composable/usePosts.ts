import axios, { AxiosError, type AxiosResponse } from 'axios'
import { ref } from 'vue'
import type { Ref } from 'vue'

interface Post {
  id: number
  title: string
  body: string
}

export const usePosts = () => {
  const posts: Ref<Post[]> = ref([])
  const isLoadingPosts = ref(false)
  const error = ref('')
  const currentPage = ref(1)
  const limit = ref(8)
  const totalPages = ref(0)

  const fetchPosts = async () => {
    isLoadingPosts.value = true
    try {
      isLoadingPosts.value = true
      const response: AxiosResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _page: currentPage.value,
            _limit: limit.value
          }
        }
      )
      if (response) {
        totalPages.value = Math.ceil(response.headers['x-total-count'] / limit.value)
        posts.value = response.data
      }
    } catch (err) {
      error.value = (err as AxiosError).message
    } finally {
      isLoadingPosts.value = false
    }
  }

  const loadPosts = async () => {
    if (currentPage.value <= totalPages.value || totalPages.value === 0) {
      isLoadingPosts.value = true
      try {
        isLoadingPosts.value = true
        const response: AxiosResponse = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: currentPage.value,
              _limit: limit.value
            }
          }
        )
        if (response) {
          totalPages.value = Math.ceil(response.headers['x-total-count'] / limit.value)
          posts.value = [...posts.value, ...response.data]
          currentPage.value++
        }
      } catch (err) {
        error.value = (err as AxiosError).message
      } finally {
        isLoadingPosts.value = false
      }
    }
  }

  const createPost = (title: string, body: string) => {
    posts.value.push({ id: Date.now(), title, body })
  }

  const deletePost = (id: number) => {
    posts.value = posts.value.filter((el) => el.id !== id)
  }

  return {
    posts,
    isLoadingPosts,
    error,
    totalPages,
    currentPage,
    fetchPosts,
    loadPosts,
    createPost,
    deletePost
  }
}
