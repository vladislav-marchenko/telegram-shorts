import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'
import { cn } from '@/lib/utils'
import { Heart } from 'lucide-react'
import { useState } from 'react'

export const VideoComment = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ContextMenu onOpenChange={setIsMenuOpen}>
      <ContextMenuTrigger asChild>
        <div
          className={cn(
            'flex gap-2 rounded-md px-2 py-3 transition-colors duration-200 md:p-4',
            {
              'bg-accent': isMenuOpen,
              'hover:bg-accent active:bg-accent': !isMenuOpen
            }
          )}
        >
          <div className='aspect-square h-8 w-8 rounded-full bg-neutral-700' />
          <div className='flex flex-auto flex-col gap-1'>
            <span className='text-xs font-bold'>Username</span>
            <span className='text-sm leading-none text-neutral-400'>
              A really long message here hahaha hello world how are you doing
            </span>
          </div>
          <button className='-mx-2 self-center p-2'>
            <Heart size={20} />
          </button>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
