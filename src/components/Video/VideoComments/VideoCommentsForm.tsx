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
import { createCommentSchema } from '@/schemas'
import { createComment } from '@/services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SendHorizonal } from 'lucide-react'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

export const VideoCommentsForm: FC<{ videoId: string }> = ({ videoId }) => {
  const form = useForm<z.infer<typeof createCommentSchema>>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: { text: '' }
  })

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      form.reset()
      queryClient.invalidateQueries({ queryKey: ['comment', videoId] })
      toast.success('Comment has been successfully created')
    },
    onError: (error) => toast.error(error.message ?? 'Something went wrong')
  })

  const onSubmit = (values: z.infer<typeof createCommentSchema>) => {
    mutate({ videoId, text: values.text })
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
