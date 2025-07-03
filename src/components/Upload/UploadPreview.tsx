import { PCTemplate } from '@/components/Templates/PCTemplate'
import { PhoneTemplate } from '@/components/Templates/PhoneTemplate'
import type { FC } from 'react'

export const UploadPreview: FC<{ media: File }> = ({ media }) => {
  const url = URL.createObjectURL(media)

  return (
    <div className='relative flex justify-center'>
      <PCTemplate className='flex w-3/4 justify-center'>
        <PhoneTemplate>
          <video
            src={url}
            controls={false}
            muted
            loop={false}
            preload='metadata'
            className='user-select-none pointer-events-none absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2'
            onClick={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
        </PhoneTemplate>
      </PCTemplate>
    </div>
  )
}
