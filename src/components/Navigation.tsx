import { Link } from '@tanstack/react-router'
import { House, Search, User } from 'lucide-react'

const items = [
  {
    href: '/search',
    icon: Search
  },
  {
    href: '/',
    icon: House
  },
  {
    href: '/user/me',
    icon: User
  }
]

export const Navigation = () => {
  return (
    <div className='flex w-full items-center justify-around border-t border-neutral-800 bg-neutral-900'>
      {items.map(({ href, icon: Icon }) => (
        <Link
          key={href}
          to={href}
          className='px-8 py-3 text-neutral-200 transition-colors duration-300 hover:text-white'
        >
          <Icon size={30} />
        </Link>
      ))}
    </div>
  )
}
