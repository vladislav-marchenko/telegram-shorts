import { ResponsiveDialog } from '../ResponsiveDialog'
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
    <ResponsiveDialog
      title='Options'
      trigger={
        <button className='cursor-pointer p-4 text-neutral-200 transition-colors hover:text-white'>
          <Ellipsis size={22} />
        </button>
      }
    >
      <span>Empty</span>
    </ResponsiveDialog>
  )
}
