import type { VolumeValues } from '@/types/contexts'
import { createContext, useState, type FC, type ReactNode } from 'react'

export const VolumeContext = createContext<VolumeValues | null>(null)

export const VolumeContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(() => {
    const volume = localStorage.getItem('volume')
    if (volume) return parseFloat(volume) || 1
    return 1
  })

  const toggleMute = () => setIsMuted(!isMuted)

  const changeVolume = (value: number) => {
    setVolume(value)
    localStorage.setItem('volume', value.toString())
  }

  const value = {
    isMuted,
    toggleMute,
    volume,
    changeVolume
  }

  return (
    <VolumeContext.Provider value={value}>{children}</VolumeContext.Provider>
  )
}
