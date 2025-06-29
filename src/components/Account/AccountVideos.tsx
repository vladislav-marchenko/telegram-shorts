export const AccountVideos = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4'>
      {Array.from({ length: 20 }).map(() => (
        <div className='h-60 w-40 rounded-md bg-neutral-600' />
      ))}
    </div>
  )
}
