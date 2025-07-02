import { ResponsiveDialog } from '../ResponsiveDialog'
import { VideoComment } from './VideoComment'
import { VideoCommentsButton } from './VideoCommentsButton'
import type { FC } from 'react'

export const VideoComments: FC<{ count: string }> = ({ count }) => {
  return (
    <ResponsiveDialog
      title='Comments'
      cancelButton={false}
      trigger={<VideoCommentsButton>{count}</VideoCommentsButton>}
    >
      {Array.from({ length: 20 }).map(() => (
        <VideoComment />
      ))}
    </ResponsiveDialog>
  )
}
