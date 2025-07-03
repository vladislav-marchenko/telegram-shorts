import { VideoVolumeIcon } from './VideoVolumeIcon'
import { Slider } from '@/components/ui/slider'
import { VideoContext } from '@/contexts/VideoContext'
import { VolumeContext } from '@/contexts/VolumeContext'
import { useVolume } from '@/hooks/useVolume'
import type { VideoValues, VolumeValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoVolume = () => {
  const { volume } = useContext(VolumeContext) as VolumeValues

  const { ref } = useContext(VideoContext) as VideoValues
  const { toggleMute, changeVolume } = useVolume(ref)

  return (
    <div className='group relative flex w-full justify-end gap-4'>
      <Slider
        value={[volume * 100]}
        max={100}
        step={1}
        onValueChange={changeVolume}
        className='absolute top-1/2 right-full w-0 -translate-y-1/2 cursor-pointer px-4 py-6 opacity-0 transition-all group-hover:w-[180px] group-hover:opacity-100 hover:opacity-100'
      />
      <button onMouseDown={toggleMute} className='video-button'>
        <VideoVolumeIcon />
      </button>
    </div>
  )
}
