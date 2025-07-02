import { Slider } from '@/components/ui/slider'
import { VideoContext } from '@/contexts/VideoContext'
import { VolumeContext } from '@/contexts/VolumeContext'
import { useVolume } from '@/hooks/useVolume'
import type { VideoValues, VolumeValues } from '@/types/contexts'
import { Volume2, VolumeOff } from 'lucide-react'
import { useContext } from 'react'

export const VideoVolume = () => {
  const { isMuted, volume } = useContext(VolumeContext) as VolumeValues

  const { ref } = useContext(VideoContext) as VideoValues
  const { toggleMute, changeVolume } = useVolume(ref)

  return (
    <div className='group absolute right-0 bottom-16 flex w-full justify-end gap-4 p-4'>
      <Slider
        value={[volume * 100]}
        max={100}
        step={1}
        onValueChange={changeVolume}
        className='w-0 cursor-pointer opacity-0 transition-all group-hover:w-1/2 group-hover:opacity-100'
      />
      <button onMouseDown={toggleMute} className='cursor-pointer'>
        {!isMuted && <Volume2 size={28} />}
        {isMuted && <VolumeOff size={28} />}
      </button>
    </div>
  )
}
