import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface VideoCommentActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'destructive'
}

export const VideoCommentAction: FC<VideoCommentActionProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        'cursor-pointer self-start text-sm text-neutral-400 transition-colors hover:underline',
        {
          'hover:text-neutral-200': variant === 'default',
          'hover:text-red-500': variant === 'destructive'
        },
        className
      )}
    >
      {children}
    </button>
  )
}
