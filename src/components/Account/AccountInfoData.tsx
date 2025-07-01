import type { User } from '@/types/api'
import { Check, Copy } from 'lucide-react'
import { useState, type FC } from 'react'
import { toast } from 'sonner'

export const AccountInfoData: FC<{ data: User }> = ({ data }) => {
  const copyUsername = () => {
    navigator.clipboard.writeText('@' + data.username)
    toast.success('Username copied to clipboard.')
  }

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
        <button
          onClick={copyUsername}
          className='group flex cursor-pointer items-center gap-1'
        >
          <span className='text-neutral-200'>@{data.username}</span>
          <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <Copy size={16} />
          </div>
        </button>
      </div>
    </>
  )
}
