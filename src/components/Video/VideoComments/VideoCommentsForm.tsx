import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createCommentSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { SendHorizonal } from 'lucide-react'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

export const VideoCommentsForm: FC<{ videoId: string }> = ({ videoId }) => {
  const form = useForm<z.infer<typeof createCommentSchema>>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: { comment: '' }
  })

  const onSubmit = (values: z.infer<typeof createCommentSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='border-t border-neutral-800 p-4 md:p-6 md:pb-0'
      >
        <div className='flex gap-2'>
          <FormField
            control={form.control}
            name='comment'
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
          <Button type='submit' size='icon'>
            <SendHorizonal />
          </Button>
        </div>
      </form>
    </Form>
  )
}
