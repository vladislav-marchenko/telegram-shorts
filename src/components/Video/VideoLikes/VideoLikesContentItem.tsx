import type { User } from '@/types/api'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

export const VideoLikesContentItem: FC<
  Omit<User, 'telegramId' | 'createdAt'>
> = ({ _id, username, displayName, photoURL }) => {
  return (
    <Link
      to='/user/$userId'
      params={{ userId: _id }}
      className='hover:bg-accent active:bg-acent flex gap-2 rounded-md p-4 transition-colors duration-200'
    >
      <img
        src={photoURL}
        className='flex h-10 w-10 items-center justify-center rounded-full bg-neutral-600 font-bold'
        alt={displayName.charAt(0)}
      />
      <div className='flex flex-col gap-1 leading-none'>
        <h2 className='font-bold'>{displayName}</h2>
        <span className='text-neutral-400'>@{username}</span>
      </div>
    </Link>
  )
}
