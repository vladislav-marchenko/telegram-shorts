import { ContextMenuItem } from '@/components/ui/context-menu'
import { CommentContext } from '@/contexts/CommentContext'
import { CommentsContext } from '@/contexts/CommentsContext'
import type { CommentsValues, CommentValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoCommentContextMenuReply = () => {
  const { comment } = useContext(CommentContext) as CommentValues
  const { setReplyingTo } = useContext(CommentsContext) as CommentsValues

  return (
    <ContextMenuItem onClick={() => setReplyingTo(comment)}>
      Reply
    </ContextMenuItem>
  )
}
