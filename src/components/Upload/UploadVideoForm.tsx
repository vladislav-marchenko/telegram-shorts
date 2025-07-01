import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { UploadMediaInput } from './UploadMediaInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  title: z.string().min(4, {
    message: 'Title must be at least 4 characters.'
  }),
  media: z.custom<File>((value) => value instanceof File, {
    message: 'Please upload a valid video file.'
  })
})

export const UploadVideoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '' }
  })
  const media = form.getValues('media')

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => console.log(values))}
          className='space-y-8 px-4'
        >
          <FormField
            control={form.control}
            name='media'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video File</FormLabel>
                <FormControl>
                  <UploadMediaInput media={media} onChange={field.onChange} />
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
          <Button type='submit' size='lg' className='w-full'>
            Submit
          </Button>
        </form>
      </Form>
    </>
  )
}
