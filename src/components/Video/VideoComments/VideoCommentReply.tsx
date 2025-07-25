import { VideoCommentAction } from './VideoCommentAction'
import { CommentContext } from '@/contexts/CommentContext'
import { CommentsContext } from '@/contexts/CommentsContext'
import type { CommentsValues, CommentValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoCommentReply = () => {
  const { comment } = useContext(CommentContext) as CommentValues
  const { setReplyingTo } = useContext(CommentsContext) as CommentsValues

  return (
    <VideoCommentAction onClick={() => setReplyingTo(comment)}>
      Reply
    </VideoCommentAction>
  )
}
