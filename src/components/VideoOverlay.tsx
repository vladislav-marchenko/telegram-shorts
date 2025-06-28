import { VideoComments } from './VideoComments'
import { VideoOptions } from './VideoOptions'
import { VideoProgress } from './VideoProgress'
import { useEffect, useState, type FC, type RefObject } from 'react'
import { FaPlay } from 'react-icons/fa'
import { LuHeart } from 'react-icons/lu'

export const VideoOverlay: FC<{
  videoRef: RefObject<HTMLVideoElement | null>
}> = ({ videoRef }) => {
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!videoRef.current) return

    videoRef.current.onplay = () => setIsPlaying(true)
    videoRef.current.onpause = () => setIsPlaying(false)
  }, [videoRef])

  return (
    <>
      <div className='absolute right-0 bottom-1/6 flex flex-col items-center gap-2'>
        <button className='cursor-pointer p-2'>
          <div className='h-12 w-12 rounded-full bg-gray-600' />
        </button>
        <button className='flex cursor-pointer flex-col items-center gap-1 p-2 text-white/70'>
          <LuHeart size={28} />
          <span className='text-sm'>143K</span>
        </button>
        <VideoComments />
        <VideoOptions />
      </div>
      <VideoProgress videoRef={videoRef} />
      {!isPlaying && (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <FaPlay size={50} className='text-white/60' />
        </div>
      )}
    </>
  )
}
