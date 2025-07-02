import { Video } from '@/components/Video'
import { VideoContextProvider } from '@/contexts/VideoContext'
import { useVideosSlider } from '@/hooks/useVideosSlider'

const videos = [
  {
    id: 1,
    url: 'https://www.shutterstock.com/shutterstock/videos/3802077631/preview/stock-footage-breathtaking-vertical-video-aspect-ratio-from-a-drone-capturing-the-beauty-of-andaman.webm'
  },
  {
    id: 2,
    url: 'https://www.shutterstock.com/shutterstock/videos/3651519417/preview/stock-footage-cinematic-drone-flight-over-high-alpine-lakes-in-the-rocky-mountains-aspect-ratio-for-mobile.webm'
  },
  {
    id: 3,
    url: 'https://www.shutterstock.com/shutterstock/videos/3636686847/preview/stock-footage-a-man-s-hand-is-stirring-tea-in-a-white-cup-with-a-teaspoon.webm'
  },
  {
    id: 4,
    url: 'https://www.shutterstock.com/shutterstock/videos/3527529409/preview/stock-footage-fishing-boat-gently-floating-on-the-calm-waters-misty-mountains-and-lush-green-forests-provide-a.webm'
  }
]

export const Videos = () => {
  const { emblaRef, slidesRef, currentIndex } = useVideosSlider()

  return (
    <div ref={emblaRef} className='h-full w-full'>
      <div ref={slidesRef} className='flex h-full flex-col'>
        {videos.map(({ id, url }, index) => {
          return (
            <VideoContextProvider key={id}>
              <div className='flex h-full w-full shrink-0 items-center justify-center'>
                <Video url={url} isCurrent={index === currentIndex} />
              </div>
            </VideoContextProvider>
          )
        })}
      </div>
    </div>
  )
}
