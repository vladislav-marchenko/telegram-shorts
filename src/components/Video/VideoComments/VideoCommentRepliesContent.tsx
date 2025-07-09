import { VideoComment } from './VideoComment'
import {
  CommentContext,
  CommentContextProvider
} from '@/contexts/CommentContext'
import { useCommentReplies } from '@/hooks/useCommentReplies'
import type { InfiniteComments } from '@/types/api'
import type { CommentValues } from '@/types/contexts'
import { useContext, useMemo, type FC } from 'react'

interface VideoCommentRepliesContentProps {
  data: { pages: InfiniteComments[] }
}

export const VideoCommentRepliesContent: FC<
  VideoCommentRepliesContentProps
> = ({ data }) => {
  const replies = useMemo(
    () => data.pages.flatMap(({ comments }) => comments),
    [data]
  )

  const { comment } = useContext(CommentContext) as CommentValues
  const { fetchNextPage } = useCommentReplies(comment._id)

  return replies.map((comment, index) => (
    <CommentContextProvider comment={comment} fetchNextPage={fetchNextPage}>
      <VideoComment key={index} />
    </CommentContextProvider>
  ))
}
