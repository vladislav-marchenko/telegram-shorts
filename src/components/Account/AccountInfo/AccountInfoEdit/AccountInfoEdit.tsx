import { AccountInfoEditForm } from './AccountInfoEditForm'
import { ResponsiveDialog } from '@/components/ResponsiveDialog'
import { Button } from '@/components/ui/button'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export const AccountInfoEdit = () => {
  const { userId } = useParams({ from: '/user/$userId' })
  const { isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
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
