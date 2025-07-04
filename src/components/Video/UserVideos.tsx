import { VideosSlider } from './VideosSlider'
import { getUserVideos } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export const UserVideos = () => {
  const { userId } = useParams({ from: '/video/_layout/user/$userId' })

  // Using URLSearchParams instead of useSearch to avoid unnecessary re-renders when the carousel updates the video index.
  const searchParams = new URLSearchParams(window.location.search)
  const index = parseInt(searchParams.get('index') || '0', 10)

  const { data, isSuccess } = useQuery({
    queryKey: ['video', 'user', userId],
    queryFn: () => getUserVideos(userId)
  })

  return (
    <div className='h-dvh overflow-hidden'>
      {isSuccess && <VideosSlider data={data} startIndex={index} />}
    </div>
  )
}
