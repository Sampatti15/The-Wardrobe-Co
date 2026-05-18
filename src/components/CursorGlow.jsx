import { useEffect } from 'react'
import './CursorGlow.css'

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow')
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}
