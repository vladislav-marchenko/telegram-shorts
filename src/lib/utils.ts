import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isMe = (id: number) => {
  return window.Telegram.WebApp.initDataUnsafe?.user?.id === id
}
