import { VideoCommentAction } from './VideoCommentAction'
import { useDeleteComment } from '@/hooks/useDeleteComment'

export const VideoCommentDelete = () => {
  const { mutate, isPending } = useDeleteComment()

  const handleClick = () => {
    if (!isPending) mutate()
  }

  return (
    <VideoCommentAction onClick={handleClick} variant='destructive'>
      Delete
    </VideoCommentAction>
  )
}
