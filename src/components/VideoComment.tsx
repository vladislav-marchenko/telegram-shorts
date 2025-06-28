import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from './ui/context-menu'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { LuHeart } from 'react-icons/lu'

export const VideoComment = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ContextMenu onOpenChange={setIsMenuOpen}>
      <ContextMenuTrigger asChild>
        <div
          className={cn('flex gap-2 p-4 transition-colors duration-200', {
            'bg-neutral-200': isMenuOpen,
            'hover:bg-neutral-200 active:bg-neutral-200': !isMenuOpen
          })}
        >
          <div className='aspect-square h-8 w-8 rounded-full bg-neutral-700' />
          <div className='flex flex-auto flex-col gap-1'>
            <span className='text-xs font-bold'>Username</span>
            <span className='text-sm leading-none text-neutral-700'>
              A really long message here hahaha hello world how are you doing
            </span>
          </div>
          <button className='-mx-2 self-center p-2'>
            <LuHeart size={20} />
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
