import { VideoCommentOption } from './VideoCommentOption'
import { useCommentReplies } from '@/hooks/useCommentReplies'
import type { FC } from 'react'

export const VideoCommentViewReplies: FC<{ commentId: string }> = ({
  commentId
}) => {
  const { refetch } = useCommentReplies(commentId)

  return (
    <VideoCommentOption onClick={() => refetch()}>
      —— View replies
    </VideoCommentOption>
  )
}
