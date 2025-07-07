import type { Comment } from '@/types/api'
import type { CommentsValues } from '@/types/contexts'
import { createContext, useState, type FC, type ReactNode } from 'react'

export const CommentsContext = createContext<CommentsValues | null>(null)

export const CommentsContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [replyingTo, setReplyingTo] = useState<Comment | null>(null)

  return (
    <CommentsContext.Provider value={{ replyingTo, setReplyingTo }}>
      {children}
    </CommentsContext.Provider>
  )
}
