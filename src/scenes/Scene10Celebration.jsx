import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Scene10Celebration({ onNext }) {
  useEffect(() => {
    // Play celebration sound
    if (typeof window !== 'undefined') {
      const context = new (window.AudioContext || window.webkitAudioContext)()
      const notes = [523, 587, 659, 784]
      
      notes.forEach((freq, i) => {
        const osc = context.createOscillator()
        const gain = context.createGain()
        osc.connect(gain)
        gain.connect(context.destination)
        osc.frequency.value = freq
        gain.gain.setValueAtTime(0.3, context.currentTime + i * 0.1)
        gain.gain.linearRampToValueAtTime(0, context.currentTime + i * 0.1 + 0.2)
        osc.start(context.currentTime + i * 0.1)
        osc.stop(context.currentTime + i * 0.1 + 0.2)
      })
    }
  }, [])

  const confetti = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 1,
    x: Math.random() * 100,
    rotation: Math.random() * 360,
  }))

  const fireworks = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    delay: i * 0.1,
  }))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Fireworks */}
      {fireworks.map(fw => (
        <motion.div
          key={fw.id}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{
            delay: fw.delay,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '30%',
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-neon-gold to-neon-blue rounded-full blur-md" />
        </motion.div>
      ))}

      {/* Confetti */}
      {confetti.map(conf => (
        <motion.div
          key={conf.id}
          initial={{
            x: `${conf.x}vw`,
            y: '-10vh',
            opacity: 1,
            rotateZ: 0,
          }}
          animate={{
            y: '110vh',
            rotateZ: 360,
            opacity: 0,
          }}
          transition={{
            duration: conf.duration,
            delay: conf.delay,
            ease: 'easeIn',
          }}
          className="absolute pointer-events-none"
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: ['#00d4ff', '#ffd700', '#9d00ff', '#ff1493'][conf.id % 4],
            }}
          />
        </motion.div>
      ))}

      {/* Balloons */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`balloon-${i}`}
          initial={{
            x: `${10 + i * 12}%`,
            y: '100vh',
            opacity: 0,
          }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.2,
            delay: i * 0.15,
            repeat: Infinity,
          }}
          className="absolute pointer-events-none"
        >
          <div className={`w-12 h-16 rounded-full border-2 flex items-end justify-center`}
            style={{
              background: ['#00d4ff', '#ffd700', '#9d00ff', '#ff1493'][i % 4],
              borderColor: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            <div className="w-px h-8 bg-white/30" />
          </div>
        </motion.div>
      ))}

      {/* Main text */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-20 text-center"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-neon-gold text-glow mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          🎉
        </motion.h1>
        <p className="text-4xl font-bold text-neon-gold text-glow mt-8">CELEBRATION MODE</p>
        <p className="text-neon-blue mt-4">Get Ready For The Grand Finale...</p>
      </motion.div>

      {/* Screen shake effect */}
      <motion.div
        animate={{ x: [0, 2, -2, 0] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.5 }}
        className="fixed inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 50px rgba(0, 212, 255, 0.1)' }}
      />

      {/* Proceed button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
      >
        GRAND FINALE →
      </motion.button>
    </motion.div>
  )
}
