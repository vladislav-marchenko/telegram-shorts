import { UploadExitWarning } from './UploadExitWarning'
import { UploadVideoButton } from './UploadVideoButton'
import { UploadVideoForm } from './UploadVideoForm'
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
import { useState } from 'react'

export const UploadVideo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isWarningOpen, setIsWarningOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    if (!open) return setIsWarningOpen(true)
    setIsOpen(open)
  }

  const confirmAction = () => {
    setIsWarningOpen(false)
    setIsOpen(false)
  }

  return (
    <>
      <Drawer open={isOpen} onOpenChange={handleOpenChange}>
        <DrawerTrigger asChild>
          <div className='absolute bottom-0 left-0 flex w-full justify-center p-4'>
            <UploadVideoButton />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Upload</DrawerTitle>
          </DrawerHeader>
          <UploadVideoForm />
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
