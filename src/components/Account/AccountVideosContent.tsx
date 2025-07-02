import type { Video } from '@/types/api'
import { formatNumber } from '@/utils'
import { Link } from '@tanstack/react-router'
import { Play } from 'lucide-react'
import type { FC } from 'react'

export const AccountVideosContent: FC<{ data: Video[] }> = ({ data }) => {
  return data.map(({ _id, title, poster, views }) => (
    <Link
      key={_id}
      to='/video/$videoId'
      params={{ videoId: _id }}
      className='group relative aspect-[9/14] overflow-hidden rounded-md bg-neutral-600'
    >
      <img src={poster} className='h-full w-full object-cover' />
      <div className='absolute top-0 left-0 flex h-full w-full flex-col justify-end bg-gradient-to-t to-transparent p-2 transition-colors group-hover:from-black/70'>
        <h1 className='invisible font-bold opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
          {title}
        </h1>
        <div className='flex items-center gap-0.5'>
          <Play size={14} />
          <span className='font-bold'>{formatNumber(views)}</span>
        </div>
      </div>
    </Link>
  ))
}
