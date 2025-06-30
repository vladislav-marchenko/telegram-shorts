export type Methods = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'

export interface Error {
  statusCode: number
  error?: string
  message: string
}

export interface User {
  _id: string
  telegramId: string
  username: string
  displayName: string
  photoURL: string
  createdAt: string
}
