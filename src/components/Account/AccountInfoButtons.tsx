import { AccountInfoEdit } from './AccountInfoEdit'
import { Upload } from '@/components/Upload/Upload'
import { Button } from '@/components/ui/button'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@tanstack/react-router'
import { Send } from 'lucide-react'

export const AccountInfoButtons = () => {
  const { params } = useMatch({ from: '/user/$userId' })
  const { isLoading, isError } = useQuery({
    queryKey: ['user', params.userId],
    queryFn: () => getUser(params.userId),
    staleTime: Infinity
  })

  if (params.userId === 'me') {
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
