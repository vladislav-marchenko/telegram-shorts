import { ResponsiveDialog } from '../ResponsiveDialog'
import { VideoComment } from './VideoComment'
import { MessageCircle } from 'lucide-react'
import type { FC } from 'react'

export const VideoComments: FC<{ count: string }> = ({ count }) => {
  return (
    <ResponsiveDialog
      title='Comments'
      cancelButton={false}
      trigger={
        <button className='flex cursor-pointer flex-col items-center gap-1 p-4 text-white/70'>
          <MessageCircle size={28} className='scale-x-[-1]' />
          <span className='text-sm'>{count}</span>
        </button>
      }
    >
      {Array.from({ length: 20 }).map(() => (
        <VideoComment />
      ))}
    </ResponsiveDialog>
  )
}
