import { VideoCommentsButton } from './VideoCommentsButton'
import { VideoCommentsContent } from './VideoCommentsContent'
import { VideoCommentsForm } from './VideoCommentsForm'
import { VideoCommentsSkeleton } from './VideoCommentsSkeleton'
import { Error } from '@/components/Error'
import { ResponsiveDialog } from '@/components/ResponsiveDialog'
import { getVideoComments } from '@/services/api'
import { formatNumber } from '@/utils'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState, type FC } from 'react'

interface VideoCommentsProps {
  count: number
  videoId: string
}

export const VideoComments: FC<VideoCommentsProps> = ({ count, videoId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { data, refetch, fetchNextPage, isSuccess, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ['comment', videoId],
      queryFn: ({ pageParam }) =>
        getVideoComments({ videoId, page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.hasNext) return pages.length + 1
      },
      enabled: isOpen
    })

  return (
    <ResponsiveDialog
      title='Comments'
      state={{ open: isOpen, onOpenChange: setIsOpen }}
      cancelButton={false}
      trigger={<VideoCommentsButton>{formatNumber(count)}</VideoCommentsButton>}
      className='flex h-full flex-col overflow-hidden px-0'
    >
      {isSuccess && (
        <VideoCommentsContent data={data} fetchNextPage={fetchNextPage} />
      )}
      {isLoading && <VideoCommentsSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
      <VideoCommentsForm videoId={videoId} />
    </ResponsiveDialog>
  )
}
