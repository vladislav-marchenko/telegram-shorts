import { Error } from '@/components/Error'
import { Video } from '@/components/Video/Video'
import { VideoSkeleton } from '@/components/Video/VideoSkeleton'
import { getVideo } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/video/_layout/$videoId')({
  component: VideoPage
})

function VideoPage() {
  const { videoId } = useParams({ from: '/video/_layout/$videoId' })
  const { data, refetch, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['video', videoId],
    queryFn: () => getVideo(videoId)
  })

  return (
    <div className='h-dvh overflow-hidden'>
      {isSuccess && <Video {...data} />}
      {isLoading && <VideoSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
