import { Slider } from '@/components/ui/slider'
import { VideoContext } from '@/contexts/VideoContext'
import { cn } from '@/lib/utils'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoProgress = () => {
  const { progress, changeProgress, isPaused } = useContext(
    VideoContext
  ) as VideoValues

  return (
    <div
      className={cn(
        'absolute bottom-8 w-full p-2 drop-shadow-md drop-shadow-black/30 transition-opacity duration-300 md:bottom-14 md:px-6',
        !isPaused && 'hover:opacity-100 any-pointer-fine:opacity-0'
      )}
    >
      <Slider
        value={[progress]}
        max={100}
        step={1}
        onValueChange={(value) => changeProgress(value[0])}
        className='h-2 cursor-pointer py-4 opacity-70 transition-all duration-300 hover:opacity-100 md:h-[38px]'
        trackClassName='md:data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:h-0.5'
        thumb={false}
      />
    </div>
  )
}
