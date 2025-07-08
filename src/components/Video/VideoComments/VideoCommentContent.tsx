import { VideoCommentUsername } from './VideoCommentContentUsername'
import { VideoCommentLike } from './VideoCommentLike'
import { VideoCommentReply } from './VideoCommentReply'
import { VideoCommentReport } from './VideoCommentReport'
import { CommentsContext } from '@/contexts/CommentsContext'
import { useObserver } from '@/hooks/useObserver'
import { cn } from '@/lib/utils'
import type { Comment } from '@/types/api'
import type { CommentsValues } from '@/types/contexts'
import { useContext, type FC } from 'react'

interface VideoCommentContentProps extends Comment {
  fetchNextPage: () => void
  isLast: boolean
  isMenuOpen: boolean
}

export const VideoCommentContent: FC<VideoCommentContentProps> = ({
  fetchNextPage,
  isLast,
  isMenuOpen,
  ...props
}) => {
  const ref = useObserver<HTMLDivElement>(fetchNextPage, isLast)
  const { setReplyingTo } = useContext(CommentsContext) as CommentsValues
  const { _id, displayName, username } = props.user

  return (
    <div
      ref={ref}
      onDoubleClick={() => setReplyingTo(props)}
      className={cn(
        'flex gap-2 rounded-md px-2 py-3 transition-colors duration-200 md:p-4',
        {
          'bg-accent': isMenuOpen,
          'hover:bg-accent active:bg-accent': !isMenuOpen
        }
      )}
      {...props}
    >
      <img
        src={props.user.photoURL}
        className='h-9 w-9 rounded-full bg-neutral-700'
      />
      <div className='flex w-full max-w-full flex-auto flex-col gap-1 overflow-hidden'>
        <VideoCommentUsername
          userId={_id}
          displayName={displayName}
          username={username}
        />
        <div className='flex items-start justify-between gap-4'>
          <span className='leading-tight break-words'>{props.text}</span>
          <VideoCommentLike />
        </div>
        <div className='flex gap-2'>
          <VideoCommentReply {...props} />
          <VideoCommentReport />
        </div>
      </div>
    </div>
  )
}
