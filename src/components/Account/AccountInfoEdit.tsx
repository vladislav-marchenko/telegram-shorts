import { ResponsiveDialog } from '../ResponsiveDialog'
import { Button } from '../ui/button'
import { AccountInfoEditForm } from './AccountInfoEditForm'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@tanstack/react-router'

export const AccountInfoEdit = () => {
  const { params } = useMatch({ from: '/user/$userId' })
  const { isLoading, isError } = useQuery({
    queryKey: ['user', params.userId],
    queryFn: () => getUser(params.userId),
    staleTime: Infinity
  })

  return (
    <ResponsiveDialog
      title='Edit Profile'
      description='Update your profile details.'
      trigger={
        <Button
          size='lg'
          isLoading={isLoading}
          disabled={isError}
          className='min-w-24'
          variant='secondary'
        >
          Edit
        </Button>
      }
    >
      <AccountInfoEditForm />
    </ResponsiveDialog>
  )
}
