import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import { useState, type FC, type ReactNode } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface ResponsiveDialogProps {
  title?: string
  description?: string
  open?: boolean
  onOpenChange?: (value: boolean) => void
  children: ReactNode
  trigger: ReactNode
  className?: string
  cancelButton?: boolean
}

export const ResponsiveDialog: FC<ResponsiveDialogProps> = ({
  title,
  description,
  open,
  onOpenChange,
  trigger,
  children,
  cancelButton = true,
  className
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          <div
            className={cn(
              '-mx-6 max-h-[70vh] overflow-x-hidden overflow-y-auto px-6',
              className
            )}
          >
            {children}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className='min-h-1/2'>
        <DrawerHeader className='text-left'>
          {title && <DrawerTitle>{title}</DrawerTitle>}
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className={cn('overflow-y-auto', className)}>
          {children}
          {cancelButton && (
            <DrawerFooter className='pt-2'>
              <DrawerClose asChild>
                <Button variant='outline' size='lg'>
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
