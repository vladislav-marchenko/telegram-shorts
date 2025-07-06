import { AccountInfoAvatar } from './AccountInfoAvatar/AccountInfoAvatar'
import { AccountInfoUsername } from './AccountInfoUsername'
import type { User } from '@/types/api'
import { type FC } from 'react'

export const AccountInfoData: FC<{ data: User }> = ({ data }) => {
  return (
    <>
      <AccountInfoAvatar url={data.photoURL} alt={data.displayName.charAt(0)} />
      <div className='flex flex-col items-center'>
        <h1 className='text-center text-2xl font-medium text-white'>
          {data.displayName}
        </h1>
        <AccountInfoUsername username={data.username} />
      </div>
    </>
  )
}
