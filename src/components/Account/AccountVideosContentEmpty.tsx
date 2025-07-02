import DuckThink from '@/assets/lotties/duck-think.json'
import Lottie from 'lottie-react'

export const AccountVideosContentEmpty = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <Lottie
        animationData={DuckThink}
        className='w-full max-w-[188px] md:max-w-3xs'
      />
      <span className='text-center text-xl font-bold'>No videos found</span>
    </div>
  )
}
