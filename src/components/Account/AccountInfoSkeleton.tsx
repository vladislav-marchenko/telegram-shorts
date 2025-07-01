export const AccountInfoSkeleton = () => {
  return (
    <>
      <div className='h-40 w-40 animate-pulse rounded-full bg-neutral-600' />
      <div className='flex flex-col items-center gap-2'>
        <div className='h-6 w-32 animate-pulse rounded-md bg-neutral-600' />
        <div className='h-4 w-20 animate-pulse rounded-md bg-neutral-600' />
      </div>
    </>
  )
}
