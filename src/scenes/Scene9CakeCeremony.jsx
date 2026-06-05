import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Scene9CakeCeremony({ onNext }) {
  const [litCandles, setLitCandles] = useState([])
  const [cut, setCut] = useState(false)

  const candles = Array.from({ length: 19 })

  const toggleCandle = (index) => {
    setLitCandles(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index)
      } else {
        return [...prev, index]
      }
    })
  }

  const allLit = litCandles.length === 19

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-neon-gold text-glow mb-2">CAKE CEREMONY</h1>
        <p className="font-mono text-neon-blue text-sm">Light all 19 candles to proceed</p>
      </motion.div>

      {/* Cake */}
      <div className="relative w-64 h-40 mb-12">
        {/* Cake base */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
        >
          {/* Layer 1 */}
          <div className="w-64 h-16 bg-gradient-to-b from-neon-gold to-yellow-600 rounded-full border-4 border-neon-gold shadow-2xl neon-glow-gold" />
          
          {/* Layer 2 */}
          <div className="w-56 h-14 bg-gradient-to-b from-neon-gold/90 to-yellow-600/90 rounded-full border-4 border-neon-gold/80 mx-4 shadow-lg neon-glow-gold" />
          
          {/* Layer 3 */}
          <div className="w-48 h-12 bg-gradient-to-b from-neon-gold/80 to-yellow-600/80 rounded-full border-4 border-neon-gold/70 mx-8 shadow-md neon-glow-gold" />
        </motion.div>

        {/* Candles */}
        <div className="absolute inset-0 flex justify-around px-8">
          {candles.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => toggleCandle(index)}
              className="relative focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Candle stick */}
              <div className="w-2 h-20 bg-gradient-to-b from-red-500 to-red-700 rounded-full mx-auto mb-1" />
              
              {/* Flame */}
              {litCandles.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-t from-yellow-300 to-orange-400 rounded-full blur-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 bg-yellow-400 rounded-full blur-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Status */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="font-mono text-neon-blue text-sm">
          Candles lit: <span className="text-neon-gold text-glow font-bold">{litCandles.length}/19</span>
        </p>
      </motion.div>

      {/* Cut button - appears when all candles lit */}
      {allLit && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setCut(true)}
          className="px-8 py-3 text-lg font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
        >
          CUT THE CAKE 🎂
        </motion.button>
      )}

      {/* Cake cut animation */}
      {cut && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 50] }}
            transition={{ duration: 1 }}
            className="text-6xl"
          >
            ✨
          </motion.div>
        </motion.div>
      )}

      {/* Proceed button after cut */}
      {cut && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onNext}
          className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
        >
          CELEBRATE →
        </motion.button>
      )}
    </motion.div>
  )
}
