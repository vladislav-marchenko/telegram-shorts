import { VideoLikesContent } from './VideoLikesContent'
import { VideoLikesSkeleton } from './VideoLikesSkeleton'
import { Error } from '@/components/Error'
import { ResponsiveDialog } from '@/components/ResponsiveDialog'
import { getVideoLikes } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState, type FC, type ReactNode } from 'react'

interface VideoLikesProps {
  children: ReactNode
  videoId: string
}

export const VideoLikes: FC<VideoLikesProps> = ({ children, videoId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { data, refetch, fetchNextPage, isSuccess, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ['likes', videoId],
      queryFn: ({ pageParam }) => getVideoLikes({ videoId, page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.hasNext) return pages.length + 1
      },
      enabled: isOpen
    })

  return (
    <ResponsiveDialog
      title='Likes'
      state={{ open: isOpen, onOpenChange: setIsOpen }}
      trigger={<button className='video-button pt-0'>{children}</button>}
      cancelButton={false}
    >
      {isSuccess && (
        <VideoLikesContent data={data} fetchNextPage={fetchNextPage} />
      )}
      {isLoading && <VideoLikesSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </ResponsiveDialog>
  )
}
