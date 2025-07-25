import { VideoCommentsFormReply } from './VideoCommentsFormReply'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CommentsContext } from '@/contexts/CommentsContext'
import { createCommentSchema } from '@/schemas'
import { createComment } from '@/services/api'
import type { CommentsValues } from '@/types/contexts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SendHorizonal } from 'lucide-react'
import { useContext, type FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

export const VideoCommentsForm: FC<{ videoId: string }> = ({ videoId }) => {
  const form = useForm<z.infer<typeof createCommentSchema>>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: { text: '' }
  })

  const { replyingTo, setReplyingTo } = useContext(
    CommentsContext
  ) as CommentsValues

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      form.reset()
      toast.success('Comment has been successfully created')

      queryClient.invalidateQueries({ queryKey: ['comment', videoId] })
      if (replyingTo) {
        queryClient.invalidateQueries({
          queryKey: ['comment', 'replies', replyingTo._id]
        })
        queryClient.refetchQueries({
          queryKey: ['comment', 'replies', replyingTo.parentId]
        })
        setReplyingTo(null)
      }
    },
    onError: (error) => toast.error(error.message ?? 'Something went wrong')
  })

  const onSubmit = (values: z.infer<typeof createCommentSchema>) => {
    mutate({ videoId, parentId: replyingTo?._id, text: values.text })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-2 border-t border-neutral-800 p-4 md:p-6 md:pb-0'
      >
        <VideoCommentsFormReply />
        <div className='flex gap-2'>
          <FormField
            control={form.control}
            name='text'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    className='h-10'
                    placeholder='Add a comment'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' isLoading={isPending} size='icon'>
            <SendHorizonal />
          </Button>
        </div>
      </form>
    </Form>
  )
}
