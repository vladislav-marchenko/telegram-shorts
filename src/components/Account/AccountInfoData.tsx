import { Button } from '../ui/button'
import { AccountInfoEdit } from './AccountInfoEdit'
import type { User } from '@/types/api'
import { useMatch } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'
import type { FC } from 'react'

export const AccountInfoData: FC<{ data: User }> = ({ data }) => {
  const { params } = useMatch({ from: '/user/$userId' })

  return (
    <>
      <img
        src={data.photoURL}
        className='h-40 w-40 rounded-full bg-neutral-600'
        draggable={false}
        alt={data.username}
      />
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-medium text-white'>{data.displayName}</h1>
        <span className='text-neutral-200'>@{data.username}</span>
      </div>
      <div className='flex gap-2'>
        {params.userId === 'me' && <AccountInfoEdit />}
        {params.userId !== 'me' && <Button size='lg'>Follow</Button>}
        <Button size='lg' variant='secondary'>
          <ExternalLink strokeWidth='3' />
        </Button>
      </div>
    </>
  )
}
