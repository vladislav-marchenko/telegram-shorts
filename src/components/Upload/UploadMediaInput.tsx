import { cn } from '@/lib/utils'
import { ImagePlus } from 'lucide-react'
import type { ChangeEvent, FC } from 'react'
import type { UseFormReturn } from 'react-hook-form'

type FormValues = {
  media: File
  title: string
}

interface UploadMediaInputProps {
  form: UseFormReturn<FormValues>
  onChange: (...event: any[]) => void
}

export const UploadMediaInput: FC<UploadMediaInputProps> = ({
  form,
  onChange
}) => {
  const media = form.getValues('media')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) onChange(file)
  }

  return (
    <div className='flex flex-col'>
      <input
        id='upload'
        type='file'
        accept='video/mp4'
        onChange={handleChange}
        hidden
      />
      <label
        htmlFor='upload'
        className={cn(
          'flex h-[200px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-neutral-800 bg-neutral-900 p-4 transition-colors duration-300',
          {
            'bg-neutral-800 text-neutral-100': media,
            'text-neutral-400 hover:bg-neutral-800': !media
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
