import { VideoCommentRepliesContent } from './VideoCommentRepliesContent'
import { useCommentReplies } from '@/hooks/useCommentReplies'
import type { FC } from 'react'

export const VideoCommentReplies: FC<{ commentId: string }> = ({
  commentId
}) => {
  const { data, isSuccess } = useCommentReplies(commentId)

  return (
    <div className='flex flex-col'>
      {isSuccess && <VideoCommentRepliesContent data={data} />}
    </div>
  )
}
