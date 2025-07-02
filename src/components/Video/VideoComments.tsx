import { VideoComment } from './VideoComment'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MessageCircle } from 'lucide-react'
import type { FC } from 'react'

export const VideoComments: FC<{ count: string }> = ({ count }) => {
  return (
    <Drawer>
      <DrawerTrigger className='flex cursor-pointer flex-col items-center gap-1 p-4 text-white/70'>
        <MessageCircle size={28} className='scale-x-[-1]' />
        <span className='text-sm'>{count}</span>
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
