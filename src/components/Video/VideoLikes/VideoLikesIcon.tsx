import { cn } from '@/lib/utils'
import { Heart } from 'lucide-react'
import type { FC } from 'react'

export const VideoLikesIcon: FC<{ isLiked: boolean }> = ({ isLiked }) => {
  return (
    <Heart size={28} className={cn(isLiked && 'fill-red-500 stroke-red-500')} />
  )
}
