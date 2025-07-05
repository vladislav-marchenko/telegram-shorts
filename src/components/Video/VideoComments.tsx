import { ResponsiveDialog } from '../ResponsiveDialog'
import { VideoComment } from './VideoComment'
import { VideoCommentsButton } from './VideoCommentsButton'
import { formatNumber } from '@/utils'
import type { FC } from 'react'

export const VideoComments: FC<{ count: number }> = ({ count }) => {
  return (
    <ResponsiveDialog
      title='Comments'
      cancelButton={false}
      trigger={<VideoCommentsButton>{formatNumber(count)}</VideoCommentsButton>}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <VideoComment key={index} />
      ))}
    </ResponsiveDialog>
  )
}
