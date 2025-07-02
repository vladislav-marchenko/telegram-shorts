import type { Methods, User, Video } from '@/types/api'

const API_URL = 'http://localhost:8000'
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
    body: JSON.stringify(newData)
  })
}

export const uploadVideo = async (formData: FormData) => {
  return await customFetch<Video>({
    endpoint: '/video',
    method: 'POST',
    body: formData
  })
}

export const getFeed = async () => {
  return await customFetch<Video[]>({ endpoint: '/video/feed' })
}

export const getMyVideos = async () => {
  return await customFetch<Video[]>({ endpoint: '/video/user/me' })
}
