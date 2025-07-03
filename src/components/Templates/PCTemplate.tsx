import { cn } from '@/lib/utils'
import type { FC, ReactNode } from 'react'

interface PCTemplateProps {
  className?: string
  children?: ReactNode
}

export const PCTemplate: FC<PCTemplateProps> = ({ className, children }) => {
  return (
    <div className='flex h-full w-full flex-col items-center'>
      <div
        className={cn(
          'relative aspect-video rounded-xl border-3 border-white/80',
          className
        )}
      >
        {children}
      </div>
      <div className='flex flex-col items-center'>
        <div className='h-10 w-1 bg-white/80' />
        <div className='h-1 w-10 rounded-full bg-white/80' />
      </div>
    </div>
  )
}
