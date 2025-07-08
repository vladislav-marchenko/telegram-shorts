import { VideoCommentAction } from './VideoCommentAction'
import { CommentContext } from '@/contexts/CommentContext'
import { useCommentReplies } from '@/hooks/useCommentReplies'
import type { CommentValues } from '@/types/contexts'
import { useContext, type FC } from 'react'

export const VideoCommentViewReplies: FC<{ commentId: string }> = ({
  commentId
}) => {
  const { isFetched, refetch } = useCommentReplies(commentId)
  const { isRepliesOpen, setIsRepliesOpen } = useContext(
    CommentContext
  ) as CommentValues

  const handleClick = () => {
    setIsRepliesOpen((isRepliesOpen) => !isRepliesOpen)
    if (!isFetched) refetch()
  }

  return (
    <VideoCommentAction onClick={handleClick}>
      —— {isRepliesOpen ? 'Hide' : 'View'} replies
    </VideoCommentAction>
  )
}
