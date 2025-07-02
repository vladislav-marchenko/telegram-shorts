import { cn } from '@/lib/utils'
import type { UploadMediaForm } from '@/types/forms'
import { ImagePlus } from 'lucide-react'
import type { ChangeEvent, FC } from 'react'

interface UploadFormInputProps {
  form: UploadMediaForm
  onChange: (...event: any[]) => void
}

export const UploadFormInput: FC<UploadFormInputProps> = ({
  form,
  onChange
}) => {
  const media = form.getValues('media')
  const isError = form.getFieldState('media').error

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) onChange(file)
  }

  return (
    <div className='flex flex-col'>
      <input
        id='upload'
        type='file'
        accept='video/*'
        onChange={handleChange}
        hidden
      />
      <label
        htmlFor='upload'
        className={cn(
          'flex h-[200px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-neutral-800 bg-neutral-900 p-4 transition-colors duration-300',
          {
            'bg-neutral-800 text-neutral-100': media,
            'text-neutral-400 hover:bg-neutral-800': !media,
            'border-destructive': isError
          }
        )}
      >
        <ImagePlus size={52} />
        <span className='text-center text-xl font-bold'>
          {media?.name || 'Select a Video'}
        </span>
      </label>
    </div>
  )
}
