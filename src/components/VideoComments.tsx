import { VideoComment } from './VideoComment'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from './ui/drawer'
import { MessageCircle } from 'lucide-react'

export const VideoComments = () => {
  return (
    <Drawer>
      <DrawerTrigger
        onClick={(event) => event.stopPropagation()}
        className='flex cursor-pointer flex-col items-center gap-1 p-2 text-white/70'
      >
        <MessageCircle size={28} className='scale-x-[-1]' />
        <span className='text-sm'>13K</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Comments</DrawerTitle>
        </DrawerHeader>
        <div className='flex flex-col overflow-y-auto px-2'>
          {Array.from({ length: 20 }).map(() => (
            <VideoComment />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
