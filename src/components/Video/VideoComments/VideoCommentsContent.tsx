import { VideoComment } from './VideoComment'
import { Empty } from '@/components/Empty'
import { CommentContextProvider } from '@/contexts/CommentContext'
import type { InfiniteComments } from '@/types/api'
import type { FC } from 'react'

interface VideoCommentsContentProps {
  data: { pages: InfiniteComments[] }
  fetchNextPage: () => void
}

export const VideoCommentsContent: FC<VideoCommentsContentProps> = ({
  data,
  fetchNextPage
}) => {
  const comments = data.pages.flatMap(({ comments }) => comments)

  if (!comments.length) {
    return <Empty title='No comments found' className='flex-auto' />
  }

  return comments.map((comment, index) => (
    <CommentContextProvider
      comment={comment}
      fetchNextPage={fetchNextPage}
      isLast={index === comments.length - 1}
    >
      <VideoComment key={index} />
    </CommentContextProvider>
  ))
}
