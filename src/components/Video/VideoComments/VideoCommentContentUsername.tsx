import { CommentContext } from '@/contexts/CommentContext'
import type { CommentValues } from '@/types/contexts'
import { Link } from '@tanstack/react-router'
import { useContext } from 'react'

export const VideoCommentUsername = () => {
  const { comment } = useContext(CommentContext) as CommentValues

  if (!comment.user) {
    return (
      <span className='truncate text-sm font-bold text-neutral-200'>
        Deleted
      </span>
    )
  }

  const { _id, displayName, username } = comment.user

  return (
    <div className='group/username flex items-center gap-1'>
      <Link
        to='/user/$userId'
        params={{ userId: _id }}
        className='cursor-pointer truncate text-sm font-bold text-neutral-200 hover:underline'
      >
        {displayName}
      </Link>
      <span className='text-xs leading-none text-neutral-400 transition-all any-pointer-fine:invisible any-pointer-fine:opacity-0 any-pointer-fine:group-hover/username:visible any-pointer-fine:group-hover/username:opacity-100'>
        @{username}
      </span>
    </div>
  )
}
