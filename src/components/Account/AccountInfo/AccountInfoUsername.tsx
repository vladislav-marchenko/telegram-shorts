import { Copy } from 'lucide-react'
import type { FC } from 'react'
import { toast } from 'sonner'

export const AccountInfoUsername: FC<{ username: string }> = ({ username }) => {
  const copyUsername = () => {
    navigator.clipboard.writeText('@' + username)
    toast.success('Username copied to clipboard.')
  }

  return (
    <button
      onClick={copyUsername}
      className='group relative flex cursor-pointer items-center gap-1 text-neutral-200'
    >
      <span>@{username}</span>
      <div className='absolute left-full p-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <Copy size={16} />
      </div>
    </button>
  )
}
