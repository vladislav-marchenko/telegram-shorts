import { VideoCommentReply } from './VideoCommentReply'
import { VideoCommentReport } from './VideoCommentReport'
import { VideoCommentViewReplies } from './VideoCommentViewReplies'
import type { Comment } from '@/types/api'
import type { FC } from 'react'

export const VideoCommentActions: FC<Comment> = (props) => {
  return (
    <div className='flex justify-between'>
      <VideoCommentViewReplies commentId={props._id} />
      <div className='flex gap-2'>
        <VideoCommentReply {...props} />
        <VideoCommentReport />
      </div>
    </div>
  )
}
