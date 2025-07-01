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
          <UploadVideoButton />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Upload</DrawerTitle>
          </DrawerHeader>
          <UploadVideoForm />
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant='outline'>Cancel</Button>
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
