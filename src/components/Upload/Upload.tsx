import { ResponsiveDialog } from '../ResponsiveDialog'
import { UploadButton } from './UploadButton'
import { UploadExitWarning } from './UploadExitWarning'
import { UploadForm } from './UploadForm'
import { useUploadForm } from '@/hooks/useUploadForm'

export const Upload = () => {
  const {
    form: { formState, isOpen, handleOpenChange, close },
    warning: { isWarningOpen, confirmExit, dismissWarning }
  } = useUploadForm()

  return (
    <>
      <ResponsiveDialog
        state={{ open: isOpen, onOpenChange: handleOpenChange }}
        trigger={<UploadButton />}
        title='Upload'
      >
        <UploadForm form={formState} close={close} />
      </ResponsiveDialog>
      <UploadExitWarning
        isOpen={isWarningOpen}
        onCancel={dismissWarning}
        onAction={confirmExit}
      />
    </>
  )
}
