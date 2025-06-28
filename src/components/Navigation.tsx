import { Link } from '@tanstack/react-router'
import { BiHomeAlt2 } from 'react-icons/bi'

const items = [
  {
    href: '/',
    icon: BiHomeAlt2
  },
  {
    href: '/',
    icon: BiHomeAlt2
  },
  {
    href: '/profile',
    icon: BiHomeAlt2
  }
]

export const Navigation = () => {
  return (
    <div className='flex w-full items-center justify-around border-t border-neutral-800 bg-neutral-900'>
      {items.map(({ href, icon: Icon }) => (
        <Link key={href} to={href} className='p-3'>
          <Icon size={30} className='text-neutral-200' />
        </Link>
      ))}
    </div>
  )
}
