import { ImagePlus } from 'lucide-react'

export const UploadVideoForm = () => {
  return (
    <div className='flex flex-col p-4'>
      <div className='flex aspect-square w-full max-w-xs flex-col items-center justify-center rounded-md border-2 border-neutral-800 bg-neutral-900 text-neutral-400'>
        <ImagePlus size={82} />
        <span className='text-xl font-bold'>Select a video</span>
      </div>
    </div>
  )
}
