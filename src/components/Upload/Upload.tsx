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
import { useUploadForm } from '@/hooks/useUploadForm'

export const Upload = () => {
  const {
    form: { formState, isOpen, handleOpenChange },
    warning: { isWarningOpen, confirmExit, dismissWarning }
  } = useUploadForm()

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
          <UploadForm form={formState} />
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
        onCancel={dismissWarning}
        onAction={confirmExit}
      />
    </>
  )
}
