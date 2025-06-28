import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from './ui/drawer'
import { BsThreeDots } from 'react-icons/bs'

export const VideoOptions = () => {
  return (
    <Drawer>
      <DrawerTrigger className='flex cursor-pointer flex-col items-center gap-1 p-2 text-white/70'>
        <BsThreeDots size={22} />
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
