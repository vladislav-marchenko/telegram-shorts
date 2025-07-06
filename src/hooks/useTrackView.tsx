import { trackView } from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useTrackView = ({
  videoId,
  isCurrent
}: {
  videoId: string
  isCurrent: boolean
}) => {
  const { mutate } = useMutation({ mutationFn: trackView })

  useEffect(() => {
    if (!isCurrent) return
    mutate(videoId)
  }, [isCurrent, videoId])
}
