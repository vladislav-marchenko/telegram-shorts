import { CommentContext } from '@/contexts/CommentContext'
import { cn } from '@/lib/utils'
import type { CommentValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoCommentText = () => {
  const { comment } = useContext(CommentContext) as CommentValues

  return (
    <span
      className={cn(
        'leading-tight break-words',
        !comment.user && 'text-neutral-500'
      )}
    >
      {comment.text}
    </span>
  )
}
