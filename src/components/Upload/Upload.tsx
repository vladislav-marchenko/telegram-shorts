import { ResponsiveDialog } from '../ResponsiveDialog'
import { UploadButton } from './UploadButton'
import { UploadExitWarning } from './UploadExitWarning'
import { UploadForm } from './UploadForm'
import { UploadPreview } from './UploadPreview'
import { useUploadForm } from '@/hooks/useUploadForm'

export const Upload = () => {
  const {
    form: { formState, isOpen, handleOpenChange, close },
    warning: { isWarningOpen, confirmExit, dismissWarning }
  } = useUploadForm()
  const media = formState.watch('media')

  return (
    <>
      <ResponsiveDialog
        state={{ open: isOpen, onOpenChange: handleOpenChange }}
        trigger={<UploadButton />}
        title='Upload'
      >
        {media && <UploadPreview media={media} />}
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
