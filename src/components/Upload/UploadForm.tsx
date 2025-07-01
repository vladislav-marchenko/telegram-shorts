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
import type { UploadMediaForm } from '@/types/forms'
import type { FC } from 'react'

interface UploadFormProps {
  form: UploadMediaForm
}

export const UploadForm: FC<UploadFormProps> = ({ form }) => {
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
          <Button type='submit' size='lg' className='w-full'>
            Submit
          </Button>
        </form>
      </Form>
    </>
  )
}
