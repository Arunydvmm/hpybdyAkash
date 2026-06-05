import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Scene4PhotoGalaxy({ onNext, photos }) {
  const containerRef = useRef(null)

  // Generate random positions for stars
  const stars = photos.length > 0 
    ? photos.map((_, i) => ({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        duration: 15 + Math.random() * 10,
        delay: i * 0.2,
      }))
    : Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        duration: 15 + Math.random() * 10,
        delay: i * 0.2,
      }))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center"
      ref={containerRef}
    >
      {/* Animated background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-0 right-0 text-center z-20"
      >
        <h1 className="text-3xl font-bold text-neon-gold text-glow">PHOTO GALAXY</h1>
        <p className="font-mono text-neon-blue text-xs mt-2">Tap stars to reveal memories</p>
      </motion.div>

      {/* Stars/Photos */}
      <div className="relative w-full h-full">
        {stars.map((star, index) => (
          <motion.div
            key={star.id}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            }}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer"
            >
              {photos[index] ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative group"
                >
                  <motion.img
                    src={photos[index]}
                    alt={`Star ${index}`}
                    className="w-24 h-24 rounded-full object-cover border-2 border-neon-gold neon-glow-gold"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-blue opacity-50"
                  />
                </motion.div>
              ) : (
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 212, 255, 0.5)',
                      '0 0 30px rgba(0, 212, 255, 1)',
                      '0 0 10px rgba(0, 212, 255, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-2xl"
                >
                  ✦
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Central glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 rounded-full blur-3xl pointer-events-none"
      />

      {/* Navigation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105 z-50"
      >
        CONTINUE →
      </motion.button>
    </motion.div>
  )
}
