import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Ellipsis } from 'lucide-react'

export const VideoOptions = () => {
  return (
    <Drawer>
      <DrawerTrigger className='cursor-pointer p-4 text-neutral-200 transition-colors hover:text-white'>
        <Ellipsis size={22} />
      </DrawerTrigger>
      <DrawerContent className='h-1/3'>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
