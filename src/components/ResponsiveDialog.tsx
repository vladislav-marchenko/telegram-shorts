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
import { useState, type FC, type ReactNode } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface ResponsiveDialogProps {
  title?: string
  description?: string
  state?: {
    open: boolean
    onOpenChange: (value: boolean) => void
  }
  trigger: ReactNode
  cancelButton?: boolean
  children: ReactNode
}

export const ResponsiveDialog: FC<ResponsiveDialogProps> = ({
  title,
  description,
  state,
  trigger,
  children,
  cancelButton = true
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [isOpen, setIsOpen] = useState(false)

  const open = state ? state.open : isOpen
  const onOpenChange = state ? state.onOpenChange : setIsOpen

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
          <div className='-mx-6 max-h-[70vh] overflow-y-auto px-6'>
            {children}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          {title && <DrawerTitle>{title}</DrawerTitle>}
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className='overflow-y-auto'>
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
