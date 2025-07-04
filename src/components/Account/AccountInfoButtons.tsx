import { AccountInfoEdit } from './AccountInfoEdit'
import { Upload } from '@/components/Upload/Upload'
import { Button } from '@/components/ui/button'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { Send } from 'lucide-react'

export const AccountInfoButtons = () => {
  const { userId } = useParams({ from: '/user/$userId' })
  const { isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    staleTime: Infinity
  })

  if (userId === 'me') {
    return (
      <div className='flex gap-2'>
        <AccountInfoEdit />
        <Upload />
      </div>
    )
  }

  return (
    <div className='flex gap-2'>
      <Button size='lg' isLoading={isLoading} disabled={isError}>
        Follow
      </Button>
      <Button
        size='icon'
        variant='secondary'
        isLoading={isLoading}
        disabled={isError}
      >
        <Send />
      </Button>
    </div>
  )
}
