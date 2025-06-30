interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code?: string
  photo_url?: string
  is_premium?: boolean
}

interface TelegramWebApp {
  initData: string
  initDataUnsafe: {
    user?: TelegramUser
    [key: string]: any
  }
  close: () => void
  sendData: (data: string) => void
  expand: () => void
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp
  }
}
