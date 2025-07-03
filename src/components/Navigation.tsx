import { cn } from '@/lib/utils'
import { Link, useLocation, useMatch } from '@tanstack/react-router'
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
  const { href } = useLocation()

  return (
    <nav
      className={cn('bottom-0 w-full md:p-2', {
        fixed: href === '/',
        sticky: href !== '/'
      })}
    >
      <div className='mx-auto flex items-center justify-around rounded-t-xl border-t border-neutral-800 bg-neutral-900/60 backdrop-blur-sm md:max-w-sm md:rounded-xl md:border md:border-neutral-700'>
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
    </nav>
  )
}
