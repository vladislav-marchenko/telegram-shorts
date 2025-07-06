import { AccountInfoAvatarSkeleton } from './AccountInfoAvatarSkeleton'
import { cn } from '@/lib/utils'
import { useState, type FC } from 'react'

interface AccountInfoAvatarProps {
  url: string
  alt: string
}

export const AccountInfoAvatar: FC<AccountInfoAvatarProps> = ({ url, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <AccountInfoAvatarSkeleton />}
      <img
        src={url}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'flex h-40 w-40 items-center justify-center rounded-full bg-neutral-600 text-7xl font-bold',
          !isLoaded && 'hidden'
        )}
        draggable={false}
        alt={alt}
      />
    </>
  )
}
