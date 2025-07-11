import type {
  InfiniteComments,
  InfiniteLikes,
  InfiniteVideos,
  Methods,
  User,
  Video
} from '@/types/api'

const API_URL = 'http://localhost:8000'
console.log(window.Telegram.WebApp.initData)
const initData = import.meta.env.VITE_INIT_DATA_MOCK // window.Telegram.WebApp.initData

export const customFetch = async <Data extends object = {}>({
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

    if (response.status === 204 && method !== 'GET') {
      return {} as Data
    }

    const response_data: Data | Error = await response.json()
    if (!response.ok) {
      throw new Error(
        'message' in response_data
          ? response_data?.message
          : 'Something went wrong'
      )
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

export const toggleVideoLike = async (videoId: string) => {
  return await customFetch({
    endpoint: `/like/toggle/${videoId}`,
    method: 'POST'
  })
}

export const getVideoLikes = async ({
  videoId,
  page = 1
}: {
  videoId: string
  page: number
}) => {
  return await customFetch<InfiniteLikes>({
    endpoint: `/like/${videoId}?page=${page}`
  })
}

export const trackView = async (videoId: string) => {
  return await customFetch({
    endpoint: `/view/${videoId}`,
    method: 'POST'
  })
}

export const createComment = async ({
  videoId,
  parentId,
  text
}: {
  videoId: string
  parentId?: string
  text: string
}) => {
  return await customFetch({
    endpoint: `/comment/${videoId}`,
    method: 'POST',
    body: JSON.stringify({ text, parentId }),
    headers: { 'Content-Type': 'application/json' }
  })
}

export const getVideoComments = async ({
  videoId,
  page = 1
}: {
  videoId: string
  page: number
}) => {
  return await customFetch<InfiniteComments>({
    endpoint: `/comment/${videoId}?page=${page}`
  })
}

export const getCommentReplies = async ({
  commentId,
  page = 1
}: {
  commentId: string
  page: number
}) => {
  return await customFetch<InfiniteComments>({
    endpoint: `/comment/replies/${commentId}?page=${page}`
  })
}

export const editComment = async ({
  commentId,
  text
}: {
  commentId: string
  text: string
}) => {
  return await customFetch({
    endpoint: `/comment/${commentId}`,
    method: 'PATCH',
    body: JSON.stringify({ text }),
    headers: { 'Content-Type': 'application/json' }
  })
}

export const deleteComment = async (commentId: string) => {
  return await customFetch({
    endpoint: `/comment/${commentId}`,
    method: 'DELETE'
  })
}
