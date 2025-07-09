import { VideoCommentAction } from './VideoCommentAction'
import { VideoCommentDelete } from './VideoCommentDelete'
import { VideoCommentReply } from './VideoCommentReply'
import { VideoCommentReport } from './VideoCommentReport'
import { VideoCommentViewReplies } from './VideoCommentViewReplies'
import { CommentContext } from '@/contexts/CommentContext'
import { isMe } from '@/lib/utils'
import type { CommentValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoCommentActions = () => {
  const { comment } = useContext(CommentContext) as CommentValues
  const isMyComment = comment.user ? isMe(comment.user.telegramId) : false

  return (
    <div className='flex justify-between'>
      {comment.repliesCount > 0 && <VideoCommentViewReplies />}
      <div className='flex gap-2'>
        {comment.user && <VideoCommentReply />}
        {!isMyComment && <VideoCommentReport />}
        {isMyComment && <VideoCommentAction>Edit</VideoCommentAction>}
        {isMyComment && <VideoCommentDelete />}
        {isMyComment && <VideoCommentDelete />}
      </div>
    </div>
  )
}
