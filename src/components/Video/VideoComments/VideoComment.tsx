import { VideoCommentContent } from './VideoCommentContent'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'
import { CommentsContext } from '@/contexts/CommentsContext'
import type { Comment } from '@/types/api'
import type { CommentsValues } from '@/types/contexts'
import { useContext, useState, type FC } from 'react'

interface VideoCommentProps extends Comment {
  fetchNextPage: () => void
  isLast: boolean
  isReply?: boolean
  hasNextPage?: boolean
}

export const VideoComment: FC<VideoCommentProps> = ({
  fetchNextPage,
  isLast,
  isReply = false,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setReplyingTo } = useContext(CommentsContext) as CommentsValues

  return (
    <ContextMenu onOpenChange={setIsMenuOpen}>
      <ContextMenuTrigger asChild>
        <VideoCommentContent
          {...props}
          fetchNextPage={fetchNextPage}
          isLast={isLast}
          isReply={isReply}
          isMenuOpen={isMenuOpen}
        />
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
