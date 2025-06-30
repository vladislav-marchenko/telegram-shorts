import type { User } from '@/types/api'

const API_URL = 'http://localhost:8000'
const initData = import.meta.env.VITE_INIT_DATA // window.Telegram.WebApp.initData

export const getMe = async () => {
  try {
    const response = await fetch(`${API_URL}/user/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `tma ${initData}`
      }
    })

    const response_data: User | Error = await response.json()

    if (!response.ok && 'message' in response_data) {
      throw new Error(response_data.message ?? 'Something went wrong')
    }

    return response_data as User
  } catch (error) {
    if (error instanceof Error) throw error
    throw new Error('Something went wrong')
  }
}
