import { VideoVolumeIcon } from './VideoVolumeIcon'
import { Slider } from '@/components/ui/slider'
import { VideoContext } from '@/contexts/VideoContext'
import { useVolume } from '@/hooks/useVolume'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoVolume = () => {
  const { ref } = useContext(VideoContext) as VideoValues
  const { volume, changeVolume, toggleMute } = useVolume(ref)

  return (
    <div className='group relative flex w-full justify-end gap-4'>
      <div className='absolute top-1/2 right-full -translate-y-1/2'>
        <Slider
          value={[volume]}
          max={100}
          step={1}
          onValueChange={(value) => changeVolume(value[0])}
          className='w-0 cursor-pointer py-6 opacity-0 drop-shadow-md drop-shadow-black/30 transition-all group-hover:w-[180px] group-hover:opacity-100 hover:opacity-100'
        />
      </div>
      <button onMouseDown={toggleMute} className='video-button'>
        <VideoVolumeIcon />
      </button>
    </div>
  )
}
