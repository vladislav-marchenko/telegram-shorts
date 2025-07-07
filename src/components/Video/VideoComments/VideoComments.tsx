import { VideoContent } from '../VideoContent'
import { VideoCommentsButton } from './VideoCommentsButton'
import { VideoCommentsContent } from './VideoCommentsContent'
import { VideoCommentsForm } from './VideoCommentsForm'
import { VideoCommentsSkeleton } from './VideoCommentsSkeleton'
import { Error } from '@/components/Error'
import { ResponsiveDialog } from '@/components/ResponsiveDialog'
import { VideoContext } from '@/contexts/VideoContext'
import { getVideoComments } from '@/services/api'
import type { VideoValues } from '@/types/contexts'
import { formatNumber } from '@/utils'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useContext, useState, type FC } from 'react'

interface VideoCommentsProps {
  count: number
  videoId: string
}

export const VideoComments: FC<VideoCommentsProps> = ({ count, videoId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { setIsShortcutsDisabled } = useContext(VideoContext) as VideoValues
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

  const onOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen)
    setIsShortcutsDisabled(isOpen)
  }

  return (
    <ResponsiveDialog
      title='Comments'
      open={isOpen}
      onOpenChange={onOpenChange}
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
