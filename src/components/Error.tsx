import { Button } from './ui/button'
import DuckSad from '@/assets/lotties/duck-sad.json'
import { cn } from '@/lib/utils'
import Lottie from 'lottie-react'
import type { FC } from 'react'

interface ErrorProps {
  error: Error
  refetch?: () => void
  className?: string
}

export const Error: FC<ErrorProps> = ({ error, refetch, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        className
      )}
    >
      <Lottie animationData={DuckSad} className='w-full max-w-[188px]' />
      <span className='text-center text-lg font-bold'>
        Error: {error.message ?? 'Something went wrong'}
      </span>
      {refetch && (
        <Button size='lg' onClick={refetch}>
          Try again
        </Button>
      )}
    </div>
  )
}
