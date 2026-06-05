import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Scene7EasterEggs({ onNext }) {
  const [revealed, setRevealed] = useState({})

  const easterEggs = [
    {
      icon: '⭐',
      title: 'Star',
      message: 'Some notifications seem unusually important.',
      color: 'neon-gold'
    },
    {
      icon: '🔒',
      title: 'Lock',
      message: 'Encrypted contact detected.',
      color: 'neon-blue'
    },
    {
      icon: '🎈',
      title: 'Balloon',
      message: 'Priority chat found.',
      color: 'neon-purple'
    },
    {
      icon: '💎',
      title: 'Gem',
      message: 'Access restricted. But we know better.',
      color: 'neon-blue'
    },
  ]

  const toggleReveal = (index) => {
    setRevealed(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black p-6 flex flex-col items-center justify-center relative"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-neon-purple text-glow mb-2">HIDDEN SECRETS</h1>
        <p className="font-mono text-neon-blue text-sm">Click to unlock easter eggs...</p>
      </motion.div>

      {/* Easter eggs grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl w-full mb-12">
        {easterEggs.map((egg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
          >
            <motion.button
              onClick={() => toggleReveal(index)}
              className={`w-full aspect-square flex flex-col items-center justify-center rounded-xl border-2 transition-all ${
                revealed[index]
                  ? `glass-dark border-${egg.color} neon-glow`
                  : 'glass border-neon-blue/50 hover:border-neon-blue'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {!revealed[index] ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-5xl"
                >
                  {egg.icon}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, rotateZ: -10 }}
                  animate={{ opacity: 1, rotateZ: 0 }}
                  className="text-center p-4"
                >
                  <p className={`text-${egg.color} text-glow font-mono text-sm font-bold`}>
                    {egg.message}
                  </p>
                </motion.div>
              )}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Mystery message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="glass-dark border-2 border-neon-purple rounded-lg p-6 max-w-xl text-center"
      >
        <p className="font-mono text-neon-purple text-sm">
          💫 More secrets might be hidden elsewhere... keep exploring! 💫
        </p>
      </motion.div>

      {/* Navigation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
      >
        NEXT →
      </motion.button>
    </motion.div>
  )
}
