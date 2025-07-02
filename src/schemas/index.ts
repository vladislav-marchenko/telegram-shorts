import { z } from 'zod'

export const updateProfileSchema = z.object({
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

export const uploadVideoSchema = z.object({
  title: z.string().min(4, {
    message: 'Title must be at least 4 characters.'
  }),
  media: z
    .custom<File>((value) => value instanceof File, {
      message: 'Please upload a valid video file.'
    })
    .refine((file) => file.size <= 100 * 1024 * 1024, {
      message: 'File size must be less than 100MB.'
    })
})
