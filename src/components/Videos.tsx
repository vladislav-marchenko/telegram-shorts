import { Video } from '@/components/Video'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useEffect, useRef, useState } from 'react'

const videos = [
  {
    id: 1,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  },
  {
    id: 2,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    id: 3,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  }
]

export const Videos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y' }, [
    WheelGesturesPlugin()
  ])
  const slidesRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      const slides = slidesRef.current?.children
      if (!slides) return

      const currentVideo = slides[currentIndex].querySelector(
        'video'
      ) as HTMLVideoElement
      currentVideo.pause()
      currentVideo.currentTime = 0

      const nextIndex = emblaApi.selectedScrollSnap()
      const nextVideo = slides[nextIndex].querySelector(
        'video'
      ) as HTMLVideoElement
      setCurrentIndex(nextIndex)
      nextVideo.play()
    }

    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, currentIndex])

  return (
    <div ref={emblaRef} className='h-full w-full overflow-hidden'>
      <div ref={slidesRef} className='flex h-full flex-col'>
        {videos.map(({ id, url }, index) => {
          return (
            <div
              key={id}
              className='flex h-full w-full shrink-0 items-center justify-center'
            >
              <Video url={url} isCurrent={index === currentIndex} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
