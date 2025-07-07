import { VideoComment } from './VideoComment'
import { Empty } from '@/components/Empty'
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

  if (!comments.length) return <Empty title='No comments found' />

  return (
    <div className='flex-auto overflow-y-auto px-2'>
      {comments.map((comment, index) => (
        <VideoComment
          key={index}
          fetchNextPage={fetchNextPage}
          isLast={index === comments.length - 1}
          {...comment}
        />
      ))}
    </div>
  )
}
