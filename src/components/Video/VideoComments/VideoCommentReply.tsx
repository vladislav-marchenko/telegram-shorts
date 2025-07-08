import { VideoCommentAction } from './VideoCommentAction'
import { CommentsContext } from '@/contexts/CommentsContext'
import type { Comment } from '@/types/api'
import type { CommentsValues } from '@/types/contexts'
import { useContext, type FC } from 'react'

export const VideoCommentReply: FC<Comment> = (props) => {
  const { setReplyingTo } = useContext(CommentsContext) as CommentsValues

  return (
    <VideoCommentAction onClick={() => setReplyingTo(props)}>
      Reply
    </VideoCommentAction>
  )
}
