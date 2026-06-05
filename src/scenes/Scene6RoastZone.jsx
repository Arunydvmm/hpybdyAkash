import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Scene6RoastZone({ onNext }) {
  const roasts = [
    '📸 Photo 1: "That smile could sell ice to an Eskimo... if you had confidence!"',
    '📸 Photo 2: "Proof that even legends have awkward phases (permanent phase detected)."',
    '📸 Photo 3: "Main character? More like side character trying hard!"',
    '📸 Photo 4: "Professional fake laugh captured in HD."',
    '📸 Photo 5: "Attitude: 100% | Actual achievements: pending review..."',
    '📸 Photo 6: "Peak performance: Overthinking and nothing else."',
    '📸 Photo 7: "Living your best life while struggling internally. Relatable!"',
    '📸 Photo 8: "Final proof: You\'re chaotic good. The chaos? Definitely good. You? TBD."',
  ]

  const [activeRoast, setActiveRoast] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black p-6 overflow-y-auto flex flex-col items-center justify-center relative"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-neon-gold text-glow mb-2">ROAST ZONE</h1>
        <p className="font-mono text-neon-blue text-sm">Evidence Archive</p>
      </motion.div>

      {/* Main roast display */}
      <motion.div
        key={activeRoast}
        initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-dark border-2 border-neon-gold rounded-2xl p-12 max-w-2xl mb-12 min-h-40 flex items-center justify-center"
      >
        <motion.p
          className="text-2xl font-bold text-neon-gold text-center text-glow"
          animate={{ opacity: [0.8, 1] }}
          transition={{ duration: 0.8 }}
        >
          {roasts[activeRoast]}
        </motion.p>
      </motion.div>

      {/* Roast cards carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full mb-12">
        {roasts.map((roast, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveRoast(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg font-mono text-xs transition-all border-2 ${
              activeRoast === index
                ? 'glass-dark border-neon-gold neon-glow-gold'
                : 'glass border-neon-blue/50'
            }`}
          >
            <span className={activeRoast === index ? 'text-neon-gold text-glow' : 'text-neon-blue'}>
              #{index + 1}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Navigation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
      >
        CONTINUE →
      </motion.button>
    </motion.div>
  )
}
