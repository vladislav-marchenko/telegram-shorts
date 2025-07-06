import { VideoLikesContent } from './VideoLikesContent'
import { VideoLikesSkeleton } from './VideoLikesSkeleton'
import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { ResponsiveDialog } from '@/components/ResponsiveDialog'
import { getVideoLikes } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useState, type FC, type ReactNode } from 'react'

interface VideoLikesProps {
  children: ReactNode
  videoId: string
}

export const VideoLikes: FC<VideoLikesProps> = ({ children, videoId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { data, refetch, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['likes', videoId],
    queryFn: () => getVideoLikes(videoId),
    enabled: isOpen
  })

  return (
    <ResponsiveDialog
      title='Likes'
      state={{ open: isOpen, onOpenChange: setIsOpen }}
      trigger={<button className='video-button pt-0'>{children}</button>}
      cancelButton={false}
    >
      {isSuccess && !!data.length && <VideoLikesContent data={data} />}
      {isSuccess && !data.length && <Empty title='No likes found' />}
      {isLoading && <VideoLikesSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </ResponsiveDialog>
  )
}
