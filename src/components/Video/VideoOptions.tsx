import { ResponsiveDialog } from '../ResponsiveDialog'
import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { Ellipsis } from 'lucide-react'
import { useContext } from 'react'

export const VideoOptions = () => {
  const { setIsShortcutsDisabled } = useContext(VideoContext) as VideoValues

  return (
    <ResponsiveDialog
      title='Options'
      onOpenChange={setIsShortcutsDisabled}
      trigger={
        <button className='video-button'>
          <Ellipsis size={22} />
        </button>
      }
    >
      <span>Empty</span>
    </ResponsiveDialog>
  )
}
