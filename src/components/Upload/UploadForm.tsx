import { UploadFormInput } from './UploadFormInput'
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
import type { uploadVideoSchema } from '@/schemas'
import { uploadVideo } from '@/services/api'
import type { UploadMediaForm } from '@/types/forms'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { FC } from 'react'
import { toast } from 'sonner'
import type { z } from 'zod'

interface UploadFormProps {
  form: UploadMediaForm
  close: () => void
}

export const UploadForm: FC<UploadFormProps> = ({ form, close }) => {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: uploadVideo,
    onSuccess: () => {
      form.reset()
      close()
      toast.success('Video has been uploaded successfully.')
      queryClient.invalidateQueries({ queryKey: ['video', 'me'] })
    },
    onError: (error) => {
      toast.error(error.message ?? 'Something went wrong.')
    }
  })

  const onSubmit = (values: z.infer<typeof uploadVideoSchema>) => {
    const formData = new FormData()
    formData.append('title', values.title)
    formData.append('media', values.media)

    mutate(formData)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 px-4'>
          <FormField
            control={form.control}
            name='media'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video File</FormLabel>
                <FormControl>
                  <UploadFormInput form={form} onChange={field.onChange} />
                </FormControl>
                <FormDescription>
                  Upload MP4 video (max 100MB, 2 mins).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='My Video' {...field} />
                </FormControl>
                <FormDescription>
                  Title must be 4–50 characters long.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            size='lg'
            isLoading={isPending}
            className='w-full'
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  )
}
