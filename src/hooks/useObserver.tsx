import { useEffect, useRef } from 'react'

export const useObserver = <Ref extends Element>(
  callback: () => void,
  enabled: boolean
) => {
  const ref = useRef<Ref>(null)

  useEffect(() => {
    const item = ref.current
    if (!enabled || !item) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback()
      },
      { threshold: 0.5 }
    )

    observer.observe(item)
    return () => observer.disconnect()
  }, [])

  return ref
}
