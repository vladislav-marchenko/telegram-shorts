import { VideoCommentAction } from './VideoCommentAction'
import { CommentContext } from '@/contexts/CommentContext'
import { useCommentReplies } from '@/hooks/useCommentReplies'
import type { CommentValues } from '@/types/contexts'
import { formatNumber } from '@/utils'
import { useContext, type FC } from 'react'

interface VideoCommentViewRepliesProps {
  commentId: string
  count: number
}

export const VideoCommentViewReplies: FC<VideoCommentViewRepliesProps> = ({
  commentId,
  count
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
      —— {isRepliesOpen ? 'Hide ' : 'View '}
      {formatNumber(count)}
      {count === 1 ? ' reply' : ' replies'}
    </VideoCommentAction>
  )
}
