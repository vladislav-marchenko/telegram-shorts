import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useEffect, useRef, useState, useCallback } from 'react'

// Using URLSearchParams instead of tanstack-router API to avoid unnecessary re-renders when the carousel updates the video index.
const setNewURLIndex = (index: number) => {
  const searchParams = new URLSearchParams(window.location.search)
  if (!searchParams.get('index')) return

  searchParams.set('index', String(index))
  const newUrl = `${window.location.pathname}?${searchParams.toString()}`
  window.history.replaceState(null, '', newUrl)
}

export const useVideosSlider = ({
  startIndex = 0
}: {
  startIndex?: number
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', startIndex }, [
    WheelGesturesPlugin()
  ])
  const slidesRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(startIndex)

  const handleSelect = useCallback(() => {
    if (!emblaApi || !slidesRef.current) return

    const slides = emblaApi.slideNodes()
    const currentSlide = slides[currentIndex]
    if (!currentSlide) return

    const prevVideo = slides[currentIndex].querySelector('video')
    if (!prevVideo) return

    prevVideo.pause()
    prevVideo.currentTime = 0

    const nextIndex = emblaApi.selectedScrollSnap()
    const nextSlide = slides[nextIndex]
    if (!nextSlide) return

    const nextVideo = nextSlide.querySelector('video')
    if (!nextVideo) return

    setNewURLIndex(nextIndex)
    nextVideo.play()

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
