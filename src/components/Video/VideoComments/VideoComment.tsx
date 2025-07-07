import { VideoCommentContent } from './VideoCommentContent'
import { VideoCommentsContent } from './VideoCommentsContent'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'
import type { Comment } from '@/types/api'
import { useState, type FC } from 'react'

interface VideoCommentProps extends Comment {
  fetchNextPage: () => void
  isLast: boolean
}

export const VideoComment: FC<VideoCommentProps> = ({
  fetchNextPage,
  isLast,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ContextMenu onOpenChange={setIsMenuOpen}>
      <ContextMenuTrigger asChild>
        <VideoCommentContent
          {...props}
          fetchNextPage={fetchNextPage}
          isLast={isLast}
          isMenuOpen={isMenuOpen}
        />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
