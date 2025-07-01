import { UploadButton } from './UploadButton'
import { UploadExitWarning } from './UploadExitWarning'
import { UploadForm } from './UploadForm'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
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

export const Upload = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isWarningOpen, setIsWarningOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '' }
  })

  const handleOpenChange = (open: boolean) => {
    if (!open && form.formState.isDirty) {
      setIsWarningOpen(true)
    } else {
      setIsOpen(open)
    }
  }

  const confirmAction = () => {
    setIsWarningOpen(false)
    setIsOpen(false)
  }

  return (
    <>
      <Drawer open={isOpen} onOpenChange={handleOpenChange}>
        <DrawerTrigger asChild>
          <div className='sticky bottom-0 left-0 flex w-full justify-center p-4'>
            <UploadButton />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Upload</DrawerTitle>
          </DrawerHeader>
          <UploadForm form={form} />
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant='outline' size='lg'>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <UploadExitWarning
        isOpen={isWarningOpen}
        onCancel={() => setIsWarningOpen(false)}
        onAction={confirmAction}
      />
    </>
  )
}
