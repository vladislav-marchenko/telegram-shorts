import { Button } from '@/components/ui/button'
import { useRouter } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

export const VideoBackButton = () => {
  const { history } = useRouter()

  return (
    <Button
      size='icon'
      variant='secondary'
      onClick={() => history.back()}
      className='absolute top-0 left-0 m-4'
    >
      <ChevronLeft className='size-5' />
    </Button>
  )
}
