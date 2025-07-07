import { CommentsContext } from '@/contexts/CommentsContext'
import { useObserver } from '@/hooks/useObserver'
import { cn } from '@/lib/utils'
import type { Comment } from '@/types/api'
import type { CommentsValues } from '@/types/contexts'
import { Link } from '@tanstack/react-router'
import { Heart } from 'lucide-react'
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
        <div className='group/username flex items-center gap-1'>
          <Link
            to='/user/$userId'
            params={{ userId: props.user._id }}
            className='cursor-pointer truncate text-sm font-bold text-neutral-200 hover:underline'
          >
            {props.user.displayName}
          </Link>
          <span className='text-xs leading-none text-neutral-400 transition-all any-pointer-fine:invisible any-pointer-fine:opacity-0 any-pointer-fine:group-hover/username:visible any-pointer-fine:group-hover/username:opacity-100'>
            @{props.user.username}
          </span>
        </div>
        <span className='text-sm leading-tight break-words text-neutral-200'>
          {props.text}
        </span>
      </div>
      <button className='-mx-2 self-center p-2'>
        <Heart size={20} />
      </button>
    </div>
  )
}
