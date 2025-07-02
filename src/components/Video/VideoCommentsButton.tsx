import { MessageCircle } from 'lucide-react'
import type { FC, ReactNode } from 'react'

export const VideoCommentsButton: FC<{ children: ReactNode }> = ({
  children
}) => {
  return (
    <button className='flex cursor-pointer flex-col items-center gap-1 p-4 text-white/70'>
      <MessageCircle size={28} className='scale-x-[-1]' />
      <span className='text-sm'>{children}</span>
    </button>
  )
}
