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
      <div className='sticky bottom-0 flex justify-center'>
        <ResponsiveDialog
          state={{ open: isOpen, onOpenChange: handleOpenChange }}
          trigger={<UploadButton />}
          title='Upload'
        >
          <UploadForm form={formState} close={close} />
        </ResponsiveDialog>
      </div>
      <UploadExitWarning
        isOpen={isWarningOpen}
        onCancel={dismissWarning}
        onAction={confirmExit}
      />
    </>
  )
}
