export type Methods = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'

export interface Error {
  statusCode: number
  error?: string
  message: string
}

export interface User {
  _id: string
  telegramId: number
  username: string
  displayName: string
  photoURL: string
  createdAt: string
}

export interface Video {
  _id: string
  userId: string
  title: string
  url: string
  poster: string
  views: number
  likesCount: number
  commentsCount: number
  createdAt: string
}

export interface InfiniteVideos {
  videos: Video[]
  hasPrevious?: boolean
  hasNext: boolean
}

export interface Like {
  _id: string
  videoId: string
  user: User
}

export interface InfiniteLikes {
  likes: Like[]
  hasNext: boolean
}

export interface Comment {
  _id: string
  videoId: string
  parentId?: string
  user: User
  text: string
  repliesCount: number
  createdAt: string
}

export interface InfiniteComments {
  comments: Comment[]
  hasNext: boolean
}
