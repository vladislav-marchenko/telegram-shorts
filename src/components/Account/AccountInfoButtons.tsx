import { Button } from '../ui/button'
import { AccountInfoEdit } from './AccountInfoEdit'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'

export const AccountInfoButtons = () => {
  const { params } = useMatch({ from: '/user/$userId' })
  const { isLoading } = useQuery({
    queryKey: ['user', params.userId],
    queryFn: () => getUser(params.userId),
    staleTime: Infinity
  })

  return (
    <div className='flex gap-2'>
      {params.userId === 'me' && <AccountInfoEdit />}
      {params.userId !== 'me' && (
        <Button size='lg' isLoading={isLoading}>
          Follow
        </Button>
      )}
      <Button isLoading={isLoading} size='icon' variant='secondary'>
        <ExternalLink strokeWidth='3' />
      </Button>
    </div>
  )
}
