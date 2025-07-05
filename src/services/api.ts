import type { InfiniteVideos, Like, Methods, User, Video } from '@/types/api'

const API_URL = 'http://localhost:8000'
console.log(window.Telegram.WebApp.initData)
const initData = import.meta.env.VITE_INIT_DATA_MOCK // window.Telegram.WebApp.initData

export const customFetch = async <Data extends object>({
  endpoint,
  method = 'GET',
  body,
  headers = {}
}: {
  endpoint: string
  method?: Methods
  body?: string | FormData
  headers?: Record<string, string>
}): Promise<Data> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers: {
        Authorization: `tma ${initData}`,
        ...headers
      },
      ...(body && { body })
    })

    const response_data: Data | Error = await response.json()

    if (!response.ok && 'message' in response_data) {
      throw new Error(response_data.message ?? 'Something went wrong')
    }

    return response_data as Data
  } catch (error) {
    if (error instanceof Error) throw error
    throw new Error('Something went wrong')
  }
}

export const getUser = async (userId: string) => {
  return await customFetch<User>({ endpoint: `/user/${userId}` })
}

export const updateProfileInfo = async (
  newData: Partial<Pick<User, 'username' | 'displayName' | 'photoURL'>>
) => {
  return await customFetch<User>({
    endpoint: '/user',
    method: 'PATCH',
    body: JSON.stringify(newData),
    headers: { 'Content-Type': 'application/json' }
  })
}

export const uploadVideo = async (formData: FormData) => {
  return await customFetch<Video>({
    endpoint: '/video',
    method: 'POST',
    body: formData
  })
}

export const getFeed = async (page: number) => {
  return await customFetch<InfiniteVideos>({
    endpoint: `/video/feed?page=${page}`
  })
}

export const getUserVideos = async ({
  userId,
  page
}: {
  userId: string
  page: number
}) => {
  return await customFetch<InfiniteVideos>({
    endpoint: `/video/user/${userId}?page=${page}`
  })
}

export const getUserVideo = async () => {
  return await customFetch<{
    currentVideo: Video
    previoud: Video[]
    next: Video[]
  }>({ endpoint: '/video' })
}

export const getVideo = async (videoId: string) => {
  return await customFetch<Video>({ endpoint: `/video/${videoId}` })
}

export const likeVideo = async (videoId: string) => {
  return await customFetch<Video>({
    endpoint: `/like/${videoId}`,
    method: 'POST'
  })
}

export const getVideoLikes = async (videoId: string) => {
  return await customFetch<Like[]>({
    endpoint: `/like/${videoId}`
  })
}
