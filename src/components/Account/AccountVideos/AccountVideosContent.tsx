import { AccountVideosItem } from './AccountVideosItem'
import type { Video } from '@/types/api'
import type { FC } from 'react'

interface AccountVideosContentProps {
  data: Video[]
  fetchNextPage: () => void
}

export const AccountVideosContent: FC<AccountVideosContentProps> = ({
  data,
  fetchNextPage
}) => {
  return data.map((video, index) => (
    <AccountVideosItem
      key={video._id}
      isLast={index === data.length - 1}
      fetchNextPage={fetchNextPage}
      {...video}
    />
  ))
}
