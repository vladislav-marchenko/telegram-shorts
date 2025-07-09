import { VideoCommentAction } from './VideoCommentAction'
import { VideoCommentRepliesContent } from './VideoCommentRepliesContent'
import { VideoCommentRepliesLine } from './VideoCommentRepliesLine'
import { VideoCommentRepliesSkeleton } from './VideoCommentRepliesSkeleton'
import { Error } from '@/components/Error'
import { CommentContext } from '@/contexts/CommentContext'
import { useCommentReplies } from '@/hooks/useCommentReplies'
import type { CommentValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoCommentReplies = () => {
  const { comment, isRepliesOpen, setIsRepliesOpen } = useContext(
    CommentContext
  ) as CommentValues
  const {
    data,
    refetch,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isLoading,
    isError,
    error
  } = useCommentReplies(comment._id)

  return (
    <div className='pl-8'>
      <div className='flex h-full items-stretch'>
        <VideoCommentRepliesLine
          onClick={() => setIsRepliesOpen(!isRepliesOpen)}
        />
        {isRepliesOpen && (
          <div className='flex flex-auto flex-col'>
            {isSuccess && <VideoCommentRepliesContent data={data} />}
            {isLoading && <VideoCommentRepliesSkeleton />}
            {isError && <Error error={error} refetch={refetch} />}
          </div>
        )}
      </div>
      {hasNextPage && isRepliesOpen && (
        <VideoCommentAction onClick={() => fetchNextPage()}>
          —— View more replies
        </VideoCommentAction>
      )}
    </div>
  )
}
