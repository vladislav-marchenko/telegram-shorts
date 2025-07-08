import { VideoCommentActions } from './VideoCommentActions'
import { VideoCommentUsername } from './VideoCommentContentUsername'
import { VideoCommentLike } from './VideoCommentLike'
import { VideoCommentReplies } from './VideoCommentReplies'
import { CommentContext } from '@/contexts/CommentContext'
import { CommentsContext } from '@/contexts/CommentsContext'
import { useObserver } from '@/hooks/useObserver'
import { cn } from '@/lib/utils'
import type { Comment } from '@/types/api'
import type { CommentsValues, CommentValues } from '@/types/contexts'
import { useContext, type FC } from 'react'

export const VideoCommentContent: FC<Comment> = ({ ...props }) => {
  const { setReplyingTo } = useContext(CommentsContext) as CommentsValues
  const { isContextMenuOpen, fetchNextPage, isLast } = useContext(
    CommentContext
  ) as CommentValues
  const ref = useObserver<HTMLDivElement>(fetchNextPage, isLast)

  return (
    <div className='flex flex-col'>
      <div
        ref={ref}
        onDoubleClick={() => setReplyingTo(props)}
        className={cn(
          'flex min-w-80 gap-2 rounded-md px-2 py-3 transition-colors duration-200 md:p-4',
          {
            'bg-accent': isContextMenuOpen,
            'hover:bg-accent active:bg-accent': !isContextMenuOpen
          }
        )}
        {...props}
      >
        <img
          src={props.user.photoURL}
          className='h-9 w-9 rounded-full bg-neutral-700'
        />
        <div className='flex w-full max-w-full flex-auto flex-col gap-1 overflow-hidden'>
          <VideoCommentUsername {...props.user} />
          <div className='flex items-start justify-between gap-4'>
            <span className='leading-tight break-words'>{props.text}</span>
            <VideoCommentLike />
          </div>
          <VideoCommentActions {...props} />
        </div>
      </div>
      <VideoCommentReplies />
    </div>
  )
}
