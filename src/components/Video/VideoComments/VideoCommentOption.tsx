import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface VideoCommentOptionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const VideoCommentOption: FC<VideoCommentOptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        'cursor-pointer self-start text-sm text-neutral-400 hover:underline',
        className
      )}
    >
      {children}
    </button>
  )
}
