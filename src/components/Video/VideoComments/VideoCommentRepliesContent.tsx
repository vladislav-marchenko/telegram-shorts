import { VideoComment } from './VideoComment'
import type { InfiniteComments } from '@/types/api'
import type { FC } from 'react'

interface VideoCommentRepliesContentProps {
  data: { pages: InfiniteComments[] }
}

export const VideoCommentRepliesContent: FC<
  VideoCommentRepliesContentProps
> = ({ data }) => {
  const replies = data.pages.flatMap(({ comments }) => comments)

  return replies.map((comment, index) => (
    <VideoComment
      key={index}
      isLast={index === replies.length - 1}
      isReply
      {...comment}
    />
  ))
}
