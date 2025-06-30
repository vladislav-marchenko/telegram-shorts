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

export const AccountInfoEdit = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size='lg'>Edit</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>Update your profile details.</DrawerDescription>
        </DrawerHeader>
        <AccountInfoEditForm />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant='outline' className='w-full'>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
