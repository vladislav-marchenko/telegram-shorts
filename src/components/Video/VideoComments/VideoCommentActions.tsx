import { VideoCommentReply } from './VideoCommentReply'
import { VideoCommentReport } from './VideoCommentReport'
import { VideoCommentViewReplies } from './VideoCommentViewReplies'
import type { Comment } from '@/types/api'
import type { FC } from 'react'

export const VideoCommentActions: FC<Comment> = (props) => {
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
        <VideoCommentReport />
      </div>
    </div>
  )
}
