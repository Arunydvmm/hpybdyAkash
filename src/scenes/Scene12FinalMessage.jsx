import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '../components/GlitchText'

export default function Scene12FinalMessage({ onNext }) {
  const [showFull, setShowFull] = useState(false)

  const finalMessages = [
    '19 YEARS COMPLETED',
    'COUNTLESS MEMORIES CREATED',
    'MORE ADVENTURES LOADING',
    'FRIENDSHIP STATUS: PERMANENT',
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-gold/20 pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 text-center space-y-12">
        {/* Title */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GlitchText
            text="HAPPY BIRTHDAY"
            className="text-6xl md:text-7xl font-bold mb-4"
          />
          <GlitchText
            text="AKASH PAL"
            className="text-5xl md:text-6xl font-bold text-neon-gold"
          />
        </motion.div>

        {/* Level unlocked */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-dark border-2 border-neon-gold rounded-lg p-8"
        >
          <motion.p
            animate={{ opacity: [0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-4xl font-bold text-neon-gold text-glow"
          >
            LEVEL 19 UNLOCKED
          </motion.p>
        </motion.div>

        {/* Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
        >
          {finalMessages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + idx * 0.1 }}
              className="glass border-2 border-neon-blue rounded-lg p-4"
            >
              <p className="font-mono text-neon-blue text-glow text-sm font-bold">
                {msg}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Secret hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => setShowFull(!showFull)}
          className="cursor-pointer"
        >
          <p className="font-mono text-neon-purple/50 text-xs hover:text-neon-purple transition-colors">
            💫 Click for more 💫
          </p>
        </motion.div>

        {showFull && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-dark border-2 border-neon-purple rounded-lg p-8 max-w-xl"
          >
            <p className="text-neon-purple text-glow font-mono text-sm leading-relaxed">
              You've unlocked a new chapter. This is your moment.<br/>
              <br/>
              19 is just the beginning. More stories to write. More memories to create. More adventures waiting.<br/>
              <br/>
              Thank you for being YOU.
            </p>
          </motion.div>
        )}
      </div>

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: [0, 1, 0], y: -50 }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
          }}
          className="fixed pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
            width: '2px',
            height: '2px',
            background: '#ffd700',
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Navigation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
      >
        LAST SURPRISE →
      </motion.button>
    </motion.div>
  )
}
