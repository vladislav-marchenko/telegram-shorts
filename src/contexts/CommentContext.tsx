import type { CommentValues } from '@/types/contexts'
import { createContext, useState, type FC, type ReactNode } from 'react'

export const CommentContext = createContext<CommentValues | null>(null)

interface CommentContextProviderProps {
  children: ReactNode
  commentId: string
  fetchNextPage: () => void
  isLast?: boolean
}

export const CommentContextProvider: FC<CommentContextProviderProps> = ({
  children,
  commentId,
  fetchNextPage,
  isLast = false
}) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
  const [isRepliesOpen, setIsRepliesOpen] = useState(false)

  return (
    <CommentContext.Provider
      value={{
        isContextMenuOpen,
        setIsContextMenuOpen,
        isRepliesOpen,
        setIsRepliesOpen,
        commentId,
        fetchNextPage,
        isLast
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}
