import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '../components/GlitchText'
import TypewriterText from '../components/TypewriterText'

export default function Scene1ClassifiedAccess({ onNext }) {
  const [showName, setShowName] = useState(false)
  const [showLevel, setShowLevel] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const bootSound = new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==')
    bootSound.play().catch(() => {})
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10"
        />
      </div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 0.2, repeat: Infinity }}
          className="w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-20"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 space-y-8">
        {/* Loading bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3 }}
          className="w-64 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mx-auto"
        />

        {/* Classified text */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xl font-mono text-neon-blue text-glow"
        >
          ⚠️ CLASSIFIED ARCHIVE DETECTED ⚠️
        </motion.div>

        {/* Typewriter sequence */}
        <div className="space-y-4">
          <TypewriterText
            text="Accessing Birthday Database..."
            speed={80}
            className="text-lg"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <TypewriterText
              text="Searching Subject..."
              speed={80}
              className="text-lg"
              onComplete={() => setTimeout(() => setShowName(true), 500)}
            />
          </motion.div>

          {showName && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TypewriterText
                text="Subject Found."
                speed={80}
                className="text-lg text-neon-gold"
              />
            </motion.div>
          )}
        </div>

        {/* Name reveal */}
        {showName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-8"
          >
            <GlitchText text="AKASH PAL" className="text-5xl md:text-7xl font-bold text-glow" />
          </motion.div>
        )}

        {/* Level unlock */}
        {showName && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            onAnimationComplete={() => setShowLevel(true)}
            className="pt-4"
          >
            <div className="inline-block glass px-8 py-4 rounded-lg border-2 border-neon-gold">
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-3xl font-bold text-neon-gold text-glow"
              >
                LEVEL 19 UNLOCKED
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Begin button */}
        {showLevel && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onNext}
            onMouseEnter={() => setShowButton(true)}
            className="mt-12 px-8 py-4 text-lg font-mono font-bold bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all duration-300 transform hover:scale-105"
          >
            BEGIN MISSION →
          </motion.button>
        )}
      </div>

      {/* Glitch elements in corners */}
      <div className="absolute top-4 right-4 text-neon-blue opacity-30 font-mono text-xs">
        [SYS_BOOT:001]
      </div>
      <div className="absolute bottom-4 left-4 text-neon-purple opacity-30 font-mono text-xs">
        [ARCHIVE_READY]
      </div>
    </motion.div>
  )
}
