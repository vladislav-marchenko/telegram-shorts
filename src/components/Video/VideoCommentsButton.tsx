import { MessageCircle } from 'lucide-react'
import type { FC, ReactNode } from 'react'

export const VideoCommentsButton: FC<{ children: ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className='video-button flex flex-col items-center gap-1'
    >
      <MessageCircle size={28} className='scale-x-[-1]' />
      <span className='text-sm'>{children}</span>
    </button>
  )
}
