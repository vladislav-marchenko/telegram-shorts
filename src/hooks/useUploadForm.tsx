import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
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

export const useUploadForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isWarningOpen, setIsWarningOpen] = useState(false)

  const formState = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '' }
  })

  const handleOpenChange = (open: boolean) => {
    if (!open && formState.formState.isDirty) {
      setIsWarningOpen(true)
    } else {
      setIsOpen(open)
    }
  }

  const confirmExit = () => {
    setIsWarningOpen(false)
    setIsOpen(false)
  }

  const dismissWarning = () => setIsWarningOpen(false)

  return {
    form: { formState, isOpen, handleOpenChange },
    warning: { isWarningOpen, confirmExit, dismissWarning }
  }
}
