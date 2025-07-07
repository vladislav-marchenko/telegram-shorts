import { VideoLikesContent } from './VideoLikesContent'
import { VideoLikesSkeleton } from './VideoLikesSkeleton'
import { Error } from '@/components/Error'
import { ResponsiveDialog } from '@/components/ResponsiveDialog'
import { VideoContext } from '@/contexts/VideoContext'
import { getVideoLikes } from '@/services/api'
import type { VideoValues } from '@/types/contexts'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useContext, useState, type FC, type ReactNode } from 'react'

interface VideoLikesProps {
  children: ReactNode
  videoId: string
}

export const VideoLikes: FC<VideoLikesProps> = ({ children, videoId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { setIsShortcutsDisabled } = useContext(VideoContext) as VideoValues
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

  const onOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen)
    setIsShortcutsDisabled(isOpen)
  }

  return (
    <ResponsiveDialog
      title='Likes'
      open={isOpen}
      onOpenChange={onOpenChange}
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
