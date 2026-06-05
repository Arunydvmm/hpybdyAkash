import React from 'react'
import { motion } from 'framer-motion'

export default function GlitchText({ text, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={`relative ${className}`}
    >
      <span className="animate-glitch font-mono text-glow">{text}</span>
      <span className="absolute top-0 left-0 animate-glitch" style={{ animationDelay: '0.1s' }}>
        {text}
      </span>
      <span className="absolute top-0 left-0 animate-glitch" style={{ animationDelay: '0.2s' }}>
        {text}
      </span>
    </motion.div>
  )
}
