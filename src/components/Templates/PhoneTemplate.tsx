import { cn } from '@/lib/utils'
import type { FC, ReactNode } from 'react'

interface PhoneTemplateProps {
  className?: string
  children: ReactNode
}

export const PhoneTemplate: FC<PhoneTemplateProps> = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        'm-px flex aspect-[9/16] justify-center rounded-xl border-3 border-white/80',
        className
      )}
    >
      <div className='mt-1 h-2 w-10 rounded-full bg-white/80' />
      {children}
    </div>
  )
}
