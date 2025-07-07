export const VideoCommentsSkeleton = () => {
  return (
    <div className='flex-auto overflow-y-auto px-2'>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className='flex gap-2 p-4'>
          <div className='h-10 w-10 animate-pulse rounded-full bg-neutral-600' />
          <div className='flex flex-col gap-1'>
            <div className='h-4 w-38 animate-pulse rounded-[3px] bg-neutral-600' />
            <div className='h-3 w-16 animate-pulse rounded-[3px] bg-neutral-600' />
          </div>
        </div>
      ))}
    </div>
  )
}
