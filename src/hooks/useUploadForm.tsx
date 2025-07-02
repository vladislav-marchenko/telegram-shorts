import { uploadVideoSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const useUploadForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isWarningOpen, setIsWarningOpen] = useState(false)

  const formState = useForm<z.infer<typeof uploadVideoSchema>>({
    resolver: zodResolver(uploadVideoSchema),
    defaultValues: { title: '' }
  })

  const close = () => setIsOpen(false)

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
    form: { formState, isOpen, handleOpenChange, close },
    warning: { isWarningOpen, confirmExit, dismissWarning }
  }
}
