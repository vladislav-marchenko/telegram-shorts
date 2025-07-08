import { VideoCommentAction } from './VideoCommentAction'
import { VideoCommentReply } from './VideoCommentReply'
import { VideoCommentReport } from './VideoCommentReport'
import { VideoCommentViewReplies } from './VideoCommentViewReplies'
import { isMe } from '@/lib/utils'
import type { Comment } from '@/types/api'
import type { FC } from 'react'

export const VideoCommentActions: FC<Comment> = (props) => {
  const isMyComment = isMe(props.user.telegramId)

  return (
    <div className='flex justify-between'>
      {props.repliesCount > 0 && (
        <VideoCommentViewReplies
          commentId={props._id}
          count={props.repliesCount}
        />
      )}
      <div className='flex gap-2'>
        <VideoCommentReply {...props} />
        {!isMyComment && <VideoCommentReport />}
        {isMyComment && <VideoCommentAction>Edit</VideoCommentAction>}
        {isMyComment && (
          <VideoCommentAction variant='destructive'>Delete</VideoCommentAction>
        )}
      </div>
    </div>
  )
}
