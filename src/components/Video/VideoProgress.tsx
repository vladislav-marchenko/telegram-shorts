import { VideoContext } from '@/contexts/VideoContext'
import { cn } from '@/lib/utils'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoProgress = () => {
  const { progress, isPaused } = useContext(VideoContext) as VideoValues

  return (
    <div
      className={cn(
        'group/progress absolute bottom-10 w-full px-2 py-4 drop-shadow-md drop-shadow-black/30 transition-opacity duration-300 md:bottom-14 md:p-6',
        !isPaused && 'hover:opacity-100 any-pointer-fine:opacity-0'
      )}
    >
      <div className='group relative h-0.5 w-full cursor-pointer overflow-hidden rounded-full bg-neutral-600/50 transition-all group-active/progress:h-2 group-active/progress:bg-neutral-600 hover:h-2 hover:bg-neutral-600 md:h-1.5'>
        <div
          className='absolute top-0 left-0 h-full w-full bg-neutral-200/70 transition-colors group-hover:bg-neutral-200 group-active/progress:bg-neutral-200'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
