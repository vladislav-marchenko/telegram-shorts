import { CommentsContext } from '@/contexts/CommentsContext'
import type { CommentsValues } from '@/types/contexts'
import { X } from 'lucide-react'
import { useContext } from 'react'

export const VideoCommentsFormReply = () => {
  const { replyingTo, setReplyingTo } = useContext(
    CommentsContext
  ) as CommentsValues

  if (!replyingTo) return

  return (
    <div className='flex h-11 flex-auto overflow-hidden rounded-md bg-neutral-900'>
      <div className='h-full w-0.5 shrink-0 bg-white' />
      <div className='flex w-full flex-auto justify-between px-2 py-1'>
        <div className='flex flex-col overflow-hidden'>
          <h6 className='truncate text-xs font-bold'>
            Reply to {replyingTo.user.displayName}
          </h6>
          <p className='truncate text-sm text-neutral-200'>{replyingTo.text}</p>
        </div>
        <button
          onClick={() => setReplyingTo(null)}
          className='shrink-0 cursor-pointer self-center rounded-sm p-1 text-neutral-200 transition-colors hover:bg-neutral-700/60 hover:text-white'
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
