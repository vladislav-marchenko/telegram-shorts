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
    <div className='group absolute right-0 bottom-16 flex w-full justify-end gap-4 p-4'>
      <Slider
        value={[volume * 100]}
        max={100}
        step={1}
        onValueChange={changeVolume}
        className='w-0 max-w-[200px] cursor-pointer opacity-0 transition-all group-hover:w-full group-hover:opacity-100'
      />
      <button
        onMouseDown={toggleMute}
        className='cursor-pointer text-neutral-200 transition-colors hover:text-white'
      >
        <VideoVolumeIcon />
      </button>
    </div>
  )
}
