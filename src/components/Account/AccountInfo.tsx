import { Button } from '../ui/button'
import { ExternalLink } from 'lucide-react'

export const AccountInfo = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-8'>
      <div className='h-40 w-40 rounded-full bg-neutral-600' />
      <h1 className='text-2xl font-medium text-white'>Username</h1>
      <div className='flex gap-2'>
        <Button size='lg'>Follow</Button>
        <Button size='lg' variant='secondary'>
          <ExternalLink strokeWidth='3' />
        </Button>
      </div>
    </div>
  )
}
