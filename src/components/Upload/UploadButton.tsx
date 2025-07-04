import { Button } from '../ui/button'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { UploadIcon } from 'lucide-react'

export const UploadButton = ({ ...props }) => {
  const { userId } = useParams({ from: '/user/$userId' })
  const { isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    staleTime: Infinity
  })

  return (
    <Button {...props} size='lg' isLoading={isLoading} disabled={isError}>
      Upload <UploadIcon />
    </Button>
  )
}
