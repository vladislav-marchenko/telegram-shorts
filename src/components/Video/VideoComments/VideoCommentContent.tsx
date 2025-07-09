import { VideoCommentActions } from './VideoCommentActions'
import { VideoCommentAvatar } from './VideoCommentAvatar'
import { VideoCommentUsername } from './VideoCommentContentUsername'
import { VideoCommentLike } from './VideoCommentLike'
import { VideoCommentReplies } from './VideoCommentReplies'
import { VideoCommentText } from './VideoCommentText'
import { CommentContext } from '@/contexts/CommentContext'
import { CommentsContext } from '@/contexts/CommentsContext'
import { useObserver } from '@/hooks/useObserver'
import { cn } from '@/lib/utils'
import type { CommentsValues, CommentValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoCommentContent = ({ ...props }) => {
  const { setReplyingTo } = useContext(CommentsContext) as CommentsValues
  const { comment, isContextMenuOpen, fetchNextPage, isLast } = useContext(
    CommentContext
  ) as CommentValues
  const ref = useObserver<HTMLDivElement>(fetchNextPage, isLast)

  const handleReply = () => {
    if (comment.user) setReplyingTo(comment)
  }

  return (
    <div className='flex flex-col'>
      <div
        ref={ref}
        onDoubleClick={handleReply}
        className={cn(
          'flex min-w-80 gap-2 rounded-md px-2 py-3 transition-colors duration-200 md:p-4',
          {
            'bg-accent': isContextMenuOpen,
            'hover:bg-accent active:bg-accent': !isContextMenuOpen
          }
        )}
        {...props}
      >
        <VideoCommentAvatar />
        <div className='flex w-full max-w-full flex-auto flex-col gap-1 overflow-hidden'>
          <VideoCommentUsername />
          <div className='flex items-start justify-between gap-4'>
            <VideoCommentText />
            <VideoCommentLike />
          </div>
          <VideoCommentActions />
        </div>
      </div>
      <VideoCommentReplies />
    </div>
  )
}
