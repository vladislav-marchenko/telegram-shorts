import { Button } from '../ui/button'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@tanstack/react-router'

export const UploadVideoButton = () => {
  const { params } = useMatch({ from: '/user/$userId' })
  const { isLoading } = useQuery({
    queryKey: ['user', params.userId],
    queryFn: () => getUser(params.userId),
    staleTime: Infinity
  })

  return (
    <Button size='lg' isLoading={isLoading} className='w-full max-w-xs'>
      Upload
    </Button>
  )
}
