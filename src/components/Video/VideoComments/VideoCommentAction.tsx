import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface VideoCommentActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const VideoCommentAction: FC<VideoCommentActionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        'cursor-pointer self-start text-sm text-neutral-400 transition-colors hover:text-neutral-200 hover:underline',
        className
      )}
    >
      {children}
    </button>
  )
}
