import type { User } from '@/types/api'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

export const VideoCommentUsername: FC<User> = ({
  _id,
  displayName,
  username
}) => {
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
