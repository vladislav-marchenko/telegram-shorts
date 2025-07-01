import type { UseFormReturn } from 'react-hook-form'

export type UploadMediaForm = UseFormReturn<{ media: File; title: string }>
