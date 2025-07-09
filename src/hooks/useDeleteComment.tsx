import { CommentContext } from '@/contexts/CommentContext'
import { deleteComment } from '@/services/api'
import type { CommentValues } from '@/types/contexts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import { toast } from 'sonner'

export const useDeleteComment = () => {
  const { comment } = useContext(CommentContext) as CommentValues

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => deleteComment(comment._id),
    onSuccess: () => {
      toast.success('Comment has been successfully deleted')

      queryClient.invalidateQueries({ queryKey: ['comment', comment.videoId] })
      if (comment.parentId) {
        queryClient.invalidateQueries({
          queryKey: ['comment', 'replies', comment.parentId]
        })
      }
    },
    onError: (error) => toast.error(error.message ?? 'Something went wrong')
  })

  return mutation
}
