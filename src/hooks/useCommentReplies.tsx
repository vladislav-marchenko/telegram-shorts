import { getCommentReplies } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useCommentReplies = (commentId: string) => {
  const query = useInfiniteQuery({
    queryKey: ['comment', 'replies', commentId],
    queryFn: ({ pageParam }) =>
      getCommentReplies({ commentId, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNext) return pages.length + 1
    },
    enabled: false
  })

  return query
}
