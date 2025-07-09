import { VideoCommentContent } from './VideoCommentContent'
import { VideoCommentContextMenuDelete } from './VideoCommentContextMenu/VideoCommentContextMenuDelete'
import { VideoCommentContextMenuReply } from './VideoCommentContextMenu/VideoCommentContextMenuReply'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'
import { CommentContext } from '@/contexts/CommentContext'
import { isMe } from '@/lib/utils'
import type { CommentValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoComment = () => {
  const { comment, setIsContextMenuOpen } = useContext(
    CommentContext
  ) as CommentValues
  const isMyComment = comment.user ? isMe(comment.user.telegramId) : false

  return (
    <ContextMenu onOpenChange={setIsContextMenuOpen}>
      <ContextMenuTrigger asChild>
        <VideoCommentContent />
      </ContextMenuTrigger>
      <ContextMenuContent>
        {comment.user && <VideoCommentContextMenuReply />}
        {isMyComment && <ContextMenuItem>Edit</ContextMenuItem>}
        {isMyComment && <VideoCommentContextMenuDelete />}
        {!isMyComment && (
          <ContextMenuItem variant='destructive'>Report</ContextMenuItem>
        )}
      </ContextMenuContent>
    </ContextMenu>
  )
}
