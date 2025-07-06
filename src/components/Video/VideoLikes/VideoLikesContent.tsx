import { VideoLikesContentItem } from './VideoLikesContentItem'
import { Empty } from '@/components/Empty'
import type { InfiniteLikes } from '@/types/api'
import { useMemo, type FC } from 'react'

interface VideoLikesContentProps {
  data: { pages: InfiniteLikes[] }
  fetchNextPage: () => void
}

export const VideoLikesContent: FC<VideoLikesContentProps> = ({
  data,
  fetchNextPage
}) => {
  const likes = useMemo(() => {
    if (!data) return []
    return data.pages.flatMap(({ likes }) => likes)
  }, [data])

  if (!likes.length) return <Empty title='No likes found' />

  return (
    <div className='flex flex-col'>
      {likes.map(({ user }, index) => (
        <VideoLikesContentItem
          key={user._id}
          {...user}
          fetchNextPage={fetchNextPage}
          isLast={index === likes.length - 1}
        />
      ))}
    </div>
  )
}
