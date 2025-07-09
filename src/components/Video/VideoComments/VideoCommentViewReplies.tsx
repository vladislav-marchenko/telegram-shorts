import { VideoCommentAction } from './VideoCommentAction'
import { CommentContext } from '@/contexts/CommentContext'
import { useCommentReplies } from '@/hooks/useCommentReplies'
import type { CommentValues } from '@/types/contexts'
import { formatNumber } from '@/utils'
import { useContext } from 'react'

export const VideoCommentViewReplies = () => {
  const { comment, isRepliesOpen, setIsRepliesOpen } = useContext(
    CommentContext
  ) as CommentValues
  const { isFetched, refetch } = useCommentReplies(comment._id)

  const handleClick = () => {
    setIsRepliesOpen((isRepliesOpen) => !isRepliesOpen)
    if (!isFetched) refetch()
  }

  return (
    <VideoCommentAction onClick={handleClick}>
      —— {isRepliesOpen ? 'Hide ' : 'View '}
      {formatNumber(comment.repliesCount)}
      {comment.repliesCount === 1 ? ' reply' : ' replies'}
    </VideoCommentAction>
  )
}
