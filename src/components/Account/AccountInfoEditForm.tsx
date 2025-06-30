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
import { getUser, updateProfileInfo } from '@/services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.'
    })
    .optional(),
  displayName: z
    .string()
    .min(2, {
      message: 'Display name must be at least 2 characters.'
    })
    .optional(),
  photoURL: z
    .string()
    .url({
      message: 'Please enter a valid URL.'
    })
    .optional()
})

export const AccountInfoEditForm = () => {
  const { data, refetch } = useQuery({
    queryKey: ['user', 'me'],
    queryFn: () => getUser('me')
  })

  const { mutate, isPending } = useMutation({
    mutationFn: updateProfileInfo,
    onSuccess: () => {
      toast.success('Profile has been updated successfully.')
      refetch()
    },
    onError: (error) => toast.error(error.message ?? 'Something went wrong.')
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: data?.username ?? '',
      displayName: data?.displayName ?? ''
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => mutate(values)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 p-4 pb-0'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='chenkomar' {...field} />
              </FormControl>
              <FormDescription>This is your unique name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='displayName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input placeholder='Vladislav Marchenko' {...field} />
              </FormControl>
              <FormDescription>This is your display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='photoURL'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo URL</FormLabel>
              <FormControl>
                <Input placeholder='https://example.com' {...field} />
              </FormControl>
              <FormDescription>This is your profile picture.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' isLoading={isPending} className='w-full'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
