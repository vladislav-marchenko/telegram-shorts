import { ResponsiveDialog } from '../ResponsiveDialog'
import { Ellipsis } from 'lucide-react'

export const VideoOptions = () => {
  return (
    <ResponsiveDialog
      title='Options'
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
