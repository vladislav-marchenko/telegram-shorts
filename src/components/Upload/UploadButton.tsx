import { Button } from '../ui/button'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@tanstack/react-router'
import { UploadIcon } from 'lucide-react'

export const UploadButton = ({ ...props }) => {
  const { params } = useMatch({ from: '/user/$userId' })
  const { isLoading, isError } = useQuery({
    queryKey: ['user', params.userId],
    queryFn: () => getUser(params.userId),
    staleTime: Infinity
  })

  return (
    <Button {...props} size='lg' isLoading={isLoading} disabled={isError}>
      Upload <UploadIcon />
    </Button>
  )
}
