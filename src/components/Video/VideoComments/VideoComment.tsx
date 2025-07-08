import { VideoCommentContent } from './VideoCommentContent'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'
import { CommentContext } from '@/contexts/CommentContext'
import { CommentsContext } from '@/contexts/CommentsContext'
import type { Comment } from '@/types/api'
import type { CommentsValues, CommentValues } from '@/types/contexts'
import { useContext, type FC } from 'react'

export const VideoComment: FC<Comment> = (props) => {
  const { setReplyingTo } = useContext(CommentsContext) as CommentsValues
  const { setIsContextMenuOpen } = useContext(CommentContext) as CommentValues

  return (
    <ContextMenu onOpenChange={setIsContextMenuOpen}>
      <ContextMenuTrigger asChild>
        <VideoCommentContent {...props} />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => setReplyingTo(props)}>
          Reply
        </ContextMenuItem>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem variant='destructive'>Delete</ContextMenuItem>
        <ContextMenuItem variant='destructive'>Report</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
