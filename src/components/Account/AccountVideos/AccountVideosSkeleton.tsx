export const AccountVideosSkeleton = () => {
  return Array.from({ length: 20 }).map((_, index) => (
    <div
      key={index}
      className='aspect-[9/14] animate-pulse rounded-md bg-neutral-600'
    />
  ))
}
