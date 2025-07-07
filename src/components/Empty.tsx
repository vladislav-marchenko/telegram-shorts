import DuckThink from '@/assets/lotties/duck-think.json'
import { cn } from '@/lib/utils'
import Lottie from 'lottie-react'
import type { FC } from 'react'

interface EmptyProps {
  title: string
  className?: string
}

export const Empty: FC<EmptyProps> = ({ title, className }) => {
  return (
    <div
      className={cn(
        'flex h-full flex-col items-center justify-center',
        className
      )}
    >
      <Lottie animationData={DuckThink} className='w-full max-w-[188px]' />
      <span className='text-center text-xl font-bold'>{title}</span>
    </div>
  )
}
