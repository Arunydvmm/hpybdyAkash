import React from 'react'
import { motion } from 'framer-motion'

export default function Scene2DigitalPassport({ onNext }) {
  const passportData = [
    { label: 'Name', value: 'AKASH PAL' },
    { label: 'Age', value: '19' },
    { label: 'Status', value: 'Birthday Legend' },
    { label: 'Friendship Level', value: '9999+' },
    { label: 'Danger Level', value: 'HIGH' },
    { label: 'Reply Speed', value: 'Selective' },
    { label: 'Secret Contact', value: '███████' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black flex items-center justify-center p-4 relative"
    >
      {/* Background animated glow */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 40px rgba(0, 212, 255, 0.2)',
            '0 0 80px rgba(0, 212, 255, 0.4)',
            '0 0 40px rgba(0, 212, 255, 0.2)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Passport Card */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-md w-full z-10"
      >
        <div className="glass-dark backdrop-blur-md border-2 border-neon-blue rounded-2xl p-8 space-y-6">
          {/* Header */}
          <motion.div
            animate={{ opacity: [0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center border-b border-neon-blue/50 pb-4"
          >
            <p className="font-mono text-neon-blue text-sm text-glow">DIGITAL PASSPORT</p>
            <p className="font-mono text-neon-gold text-xs mt-1">CLASSIFIED LEVEL 19</p>
          </motion.div>

          {/* Data fields */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {passportData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <span className="font-mono text-xs text-neon-blue/70">{item.label}</span>
                <motion.span
                  animate={{ opacity: [0.6, 1] }}
                  transition={{ duration: 1.5, delay: index * 0.1, repeat: Infinity }}
                  className="font-mono text-sm font-bold text-neon-gold text-glow"
                >
                  {item.value}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scan lines effect */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,212,255,0.1) 0px, rgba(0,212,255,0.1) 1px, transparent 1px, transparent 2px)',
            }}
          />

          {/* Holographic effect */}
          <motion.div
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-2 right-2 w-12 h-12 border border-neon-gold/30 rounded-full pointer-events-none opacity-30"
          />
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
      >
        NEXT SCAN →
      </motion.button>
    </motion.div>
  )
}
