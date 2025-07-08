import { CommentContext } from '@/contexts/CommentContext'
import { getCommentReplies } from '@/services/api'
import type { CommentValues } from '@/types/contexts'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useContext } from 'react'

export const useCommentReplies = (commentId: string) => {
  const { isRepliesOpen } = useContext(CommentContext) as CommentValues
  const query = useInfiniteQuery({
    queryKey: ['comment', 'replies', commentId],
    queryFn: ({ pageParam }) =>
      getCommentReplies({ commentId, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNext) return pages.length + 1
    },
    enabled: isRepliesOpen
  })

  return query
}
