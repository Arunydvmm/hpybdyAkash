import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TypewriterText({ text, speed = 50, onComplete = null, className = '' }) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        if (onComplete) onComplete()
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, onComplete])

  return (
    <motion.p
      className={`font-mono text-neon-blue text-glow ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      <span className="animate-pulse">_</span>
    </motion.p>
  )
}
