import DuckThink from '@/assets/lotties/duck-think.json'
import Lottie from 'lottie-react'
import type { FC } from 'react'

export const Empty: FC<{ title: string }> = ({ title }) => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <Lottie animationData={DuckThink} className='w-full max-w-[188px]' />
      <span className='text-center text-xl font-bold'>{title}</span>
    </div>
  )
}
