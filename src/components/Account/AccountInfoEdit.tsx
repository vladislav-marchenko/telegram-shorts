import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer'
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
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          size='lg'
          isLoading={isLoading}
          disabled={isError}
          className='min-w-24'
        >
          Edit
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>Update your profile details.</DrawerDescription>
        </DrawerHeader>
        <AccountInfoEditForm />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant='outline' size='lg' className='w-full'>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
