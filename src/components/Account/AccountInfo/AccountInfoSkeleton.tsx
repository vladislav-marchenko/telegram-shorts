import { AccountInfoAvatarSkeleton } from './AccountInfoAvatar/AccountInfoAvatarSkeleton'

export const AccountInfoSkeleton = () => {
  return (
    <>
      <AccountInfoAvatarSkeleton />
      <div className='flex flex-col items-center gap-2'>
        <div className='h-7 w-44 animate-pulse rounded-md bg-neutral-600' />
        <div className='h-5 w-24 animate-pulse rounded-md bg-neutral-600' />
      </div>
    </>
  )
}
