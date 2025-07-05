import { VideoLikesContentItem } from './VideoLikesContentItem'
import type { Like } from '@/types/api'
import type { FC } from 'react'

export const VideoLikesContent: FC<{ data: Like[] }> = ({ data }) => {
  return (
    <div className='flex flex-col'>
      {data.map(({ user }) => (
        <VideoLikesContentItem key={user._id} {...user} />
      ))}
    </div>
  )
}
