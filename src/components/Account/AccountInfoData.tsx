import { AccountInfoUsername } from './AccountInfoUsername'
import type { User } from '@/types/api'
import { type FC } from 'react'

export const AccountInfoData: FC<{ data: User }> = ({ data }) => {
  return (
    <>
      <img
        src={data.photoURL}
        className='h-40 w-40 rounded-full bg-neutral-600'
        draggable={false}
        alt={data.username}
      />
      <div className='flex flex-col items-center'>
        <h1 className='text-center text-2xl font-medium text-white'>
          {data.displayName}
        </h1>
        <AccountInfoUsername username={data.username} />
      </div>
    </>
  )
}
