import { CommentContext } from '@/contexts/CommentContext'
import type { CommentValues } from '@/types/contexts'
import { UserRoundX } from 'lucide-react'
import { useContext } from 'react'

export const VideoCommentAvatar = () => {
  const {
    comment: { user }
  } = useContext(CommentContext) as CommentValues

  return (
    <div className='flex aspect-square h-full max-h-9 w-full max-w-9 items-center justify-center overflow-hidden rounded-full bg-neutral-700'>
      {user && <img src={user.photoURL} className='h-full w-full' />}
      {!user && <UserRoundX size={16} />}
    </div>
  )
}
