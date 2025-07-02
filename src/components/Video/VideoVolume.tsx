import { Slider } from '@/components/ui/slider'
import { VolumeContext } from '@/contexts/VolumeContext'
import type { VolumeValues } from '@/types/contexts'
import { Volume2, VolumeOff } from 'lucide-react'
import { useContext, type FC, type RefObject } from 'react'

export const VideoVolume: FC<{
  videoRef: RefObject<HTMLVideoElement | null>
}> = ({ videoRef }) => {
  const { isMuted, toggleMute, volume, changeVolume } = useContext(
    VolumeContext
  ) as VolumeValues

  const toggle = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    toggleMute()
  }

  const change = (value: number[]) => {
    if (!videoRef.current) return
    if (isMuted) toggle()

    const newVolume = value[0] / 100
    videoRef.current.volume = newVolume
    changeVolume(newVolume)
  }

  return (
    <div className='group absolute right-0 bottom-16 flex w-full justify-end gap-4 p-4'>
      <Slider
        value={[volume * 100]}
        max={100}
        step={1}
        onValueChange={change}
        className='w-0 cursor-pointer opacity-0 transition-all group-hover:w-1/2 group-hover:opacity-100'
      />
      <button onMouseDown={toggle} className='cursor-pointer'>
        {!isMuted && <Volume2 size={28} />}
        {isMuted && <VolumeOff size={28} />}
      </button>
    </div>
  )
}
