import { ContextMenuItem } from '@/components/ui/context-menu'
import { useDeleteComment } from '@/hooks/useDeleteComment'

export const VideoCommentContextMenuDelete = () => {
  const { mutate, isPending } = useDeleteComment()

  const handleClick = () => {
    if (!isPending) mutate()
  }

  return (
    <ContextMenuItem onClick={handleClick} variant='destructive'>
      Delete
    </ContextMenuItem>
  )
}
