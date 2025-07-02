import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useEffect, useRef, useState, useCallback } from 'react'

export const useVideosSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y' }, [
    WheelGesturesPlugin()
  ])
  const slidesRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSelect = useCallback(() => {
    if (!emblaApi || !slidesRef.current) return

    const slides = slidesRef.current.children
    const prevVideo = slides[currentIndex]?.querySelector(
      'video'
    ) as HTMLVideoElement
    if (prevVideo) {
      prevVideo.pause()
      prevVideo.currentTime = 0
    }

    const nextIndex = emblaApi.selectedScrollSnap()
    const nextVideo = slides[nextIndex]?.querySelector(
      'video'
    ) as HTMLVideoElement
    if (nextVideo) nextVideo.play()

    setCurrentIndex(nextIndex)
  }, [emblaApi, currentIndex])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', handleSelect)
    return () => {
      emblaApi.off('select', handleSelect)
    }
  }, [emblaApi, handleSelect])

  return { emblaRef, slidesRef, currentIndex }
}
