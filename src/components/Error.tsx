import { Button } from './ui/button'
import DuckSad from '@/assets/lotties/duck-sad.json'
import Lottie from 'lottie-react'
import type { FC } from 'react'

interface ErrorProps {
  error: Error
  refetch?: () => void
}

export const Error: FC<ErrorProps> = ({ error, refetch }) => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-4'>
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
