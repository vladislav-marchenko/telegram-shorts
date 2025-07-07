import { VideoComment } from './VideoComment'
import { VideoCommentsButton } from './VideoCommentsButton'
import { VideoCommentsForm } from './VideoCommentsForm'
import { ResponsiveDialog } from '@/components/ResponsiveDialog'
import { formatNumber } from '@/utils'
import type { FC } from 'react'

interface VideoCommentsProps {
  count: number
  videoId: string
}

export const VideoComments: FC<VideoCommentsProps> = ({ count, videoId }) => {
  return (
    <ResponsiveDialog
      title='Comments'
      cancelButton={false}
      trigger={<VideoCommentsButton>{formatNumber(count)}</VideoCommentsButton>}
      className='flex h-full flex-col overflow-hidden px-0'
    >
      <div className='flex-auto overflow-y-auto px-2'>
        {Array.from({ length: 20 }).map((_, index) => (
          <VideoComment key={index} />
        ))}
      </div>
      <VideoCommentsForm videoId={videoId} />
    </ResponsiveDialog>
  )
}
