import { VolumeContext } from '@/contexts/VolumeContext'
import { cn } from '@/lib/utils'
import type { VolumeValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoVolumeIcon = () => {
  const { isMuted, volume } = useContext(VolumeContext) as VolumeValues

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <g
        className={cn(
          'transition-opacity duration-300 ease-in',
          isMuted && 'opacity-85'
        )}
      >
        <path d='M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z'></path>
        <path
          d='M16 9a5 5 0 0 1 0 6'
          className={cn(
            'transition-opacity duration-300 ease-in',
            volume < 0.3 && 'opacity-0'
          )}
        />
        <path
          d='M19.364 18.364a9 9 0 0 0 0-12.728'
          className={cn(
            'transition-opacity duration-300 ease-in',
            volume < 0.7 && 'opacity-0'
          )}
        />
        <path
          d='m2 2 20 20'
          className='transition-[stroke-dashoffset,_stroke-opacity] duration-300 ease-in'
          style={{
            strokeDashoffset: isMuted ? 0 : 30,
            strokeDasharray: 30,
            strokeOpacity: isMuted ? 1 : 0
          }}
        />
      </g>
    </svg>
  )
}
