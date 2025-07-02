export const AccountVideosSkeleton = () => {
  return Array.from({ length: 20 }).map((_, index) => (
    <div
      key={index}
      className='h-64 w-44 animate-pulse rounded-md bg-neutral-600'
    />
  ))
}
