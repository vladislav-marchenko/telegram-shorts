import { Slider } from '@/components/ui/slider'
import { VideoContext } from '@/contexts/VideoContext'
import { useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoProgress = () => {
  const { ref, isManuallyPaused } = useContext(VideoContext) as VideoValues
  const [progress, changeProgress] = useProgress(ref)

  return (
    <div
      className={cn(
        'absolute bottom-8 w-full px-3 py-2 drop-shadow-md drop-shadow-black/30 transition-opacity duration-300 md:bottom-14 md:px-6',
        !isManuallyPaused && 'hover:opacity-100 any-pointer-fine:opacity-0'
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
