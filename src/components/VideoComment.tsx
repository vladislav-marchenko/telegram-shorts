import { LuHeart } from 'react-icons/lu'

export const VideoComment = () => {
  return (
    <div className='flex gap-2'>
      <div className='aspect-square h-8 w-8 rounded-full bg-neutral-700' />
      <div className='flex flex-auto flex-col gap-1'>
        <span className='text-xs font-bold'>Username</span>
        <span className='text-sm leading-none text-neutral-700'>
          A really long message here hahaha hello world how are you doing
        </span>
      </div>
      <button className='-mx-2 self-center p-2'>
        <LuHeart size={20} />
      </button>
    </div>
  )
}
