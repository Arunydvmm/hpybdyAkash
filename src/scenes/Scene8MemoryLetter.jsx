import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import TypewriterText from '../components/TypewriterText'

export default function Scene8MemoryLetter({ onNext, isMuted }) {
  const [showEnd, setShowEnd] = useState(false)

  useEffect(() => {
    if (!isMuted) {
      // Play subtle background music - create a simple ambient sound
      const context = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      
      oscillator.connect(gain)
      gain.connect(context.destination)
      
      oscillator.frequency.value = 60
      gain.gain.setValueAtTime(0, context.currentTime)
      gain.gain.linearRampToValueAtTime(0.05, context.currentTime + 0.5)
      
      oscillator.start(context.currentTime)
      oscillator.stop(context.currentTime + 4)
    }
  }, [isMuted])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black p-6 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: [0, 0.5, 0], y: -100 }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            background: 'rgba(0, 212, 255, 0.6)',
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-neon-gold text-glow mb-4">A MEMORY LETTER</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-gold mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-dark border-2 border-neon-blue rounded-lg p-8 space-y-6"
        >
          <TypewriterText
            text="Through all the jokes, chaos, and late-night talks..."
            speed={40}
            className="text-lg text-neon-blue"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <TypewriterText
              text="Random adventures and unforgettable memories..."
              speed={40}
              className="text-lg text-neon-blue"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
          >
            <TypewriterText
              text="You make every moment worth remembering. Every laugh, every roast, every shared memory—it all matters."
              speed={40}
              className="text-lg text-neon-gold"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6.5 }}
            onAnimationComplete={() => setShowEnd(true)}
          >
            <TypewriterText
              text="19 years of you being the friend everyone needs but doesn't deserve."
              speed={40}
              className="text-lg text-neon-purple"
            />
          </motion.div>
        </motion.div>

        {showEnd && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark border-2 border-neon-gold rounded-lg p-6"
          >
            <p className="text-neon-gold text-glow font-bold text-lg">
              You're not just a friend,
            </p>
            <p className="text-neon-blue mt-2">You're a legend.</p>
          </motion.div>
        )}
      </div>

      {/* Navigation */}
      {showEnd && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onNext}
          className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
        >
          CONTINUE →
        </motion.button>
      )}
    </motion.div>
  )
}
