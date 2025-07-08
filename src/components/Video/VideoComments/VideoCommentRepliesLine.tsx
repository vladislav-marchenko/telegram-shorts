import type { FC } from 'react'

export const VideoCommentRepliesLine: FC<{ onClick?: () => void }> = ({
  onClick
}) => {
  return (
    <div onClick={onClick} className='group cursor-pointer px-2'>
      <div className='h-full w-0.5 bg-neutral-500 transition-colors group-hover:bg-neutral-200' />
    </div>
  )
}
