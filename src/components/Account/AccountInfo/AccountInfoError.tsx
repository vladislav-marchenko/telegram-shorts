import DuckSad from '@/assets/lotties/duck-sad.json'
import Lottie from 'lottie-react'
import type { FC } from 'react'

export const AccountInfoError: FC<{ error: Error }> = ({ error }) => {
  return (
    <>
      <Lottie animationData={DuckSad} className='w-full max-w-[188px]' />
      <span className='text-lg font-bold'>
        Error: {error.message ?? 'Something went wrong'}
      </span>
    </>
  )
}
