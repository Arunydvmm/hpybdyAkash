import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Scene13GiftBox({ photos }) {
  const [opened, setOpened] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Background effects */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 40px rgba(255, 215, 0, 0.2)',
            '0 0 80px rgba(255, 215, 0, 0.4)',
            '0 0 40px rgba(255, 215, 0, 0.2)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Falling sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: [0, 1, 0], y: 800 }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
          className="fixed pointer-events-none text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          ✨
        </motion.div>
      ))}

      {!opened ? (
        <motion.div
          className="relative z-10 text-center space-y-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-neon-gold text-glow mb-4">
              ONE MORE THING...
            </h1>
            <p className="font-mono text-neon-blue">A special surprise awaits</p>
          </motion.div>

          {/* Gift box */}
          <motion.div
            onClick={() => setOpened(true)}
            className="cursor-pointer relative"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Box */}
            <div className="w-40 h-40 relative">
              {/* Box body */}
              <div className="w-full h-full bg-gradient-to-br from-neon-gold to-yellow-600 rounded-lg shadow-2xl border-4 border-neon-gold neon-glow-gold flex items-center justify-center">
                {/* Lid */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-gradient-to-br from-neon-gold to-yellow-600 rounded-t-lg border-4 border-neon-gold neon-glow-gold"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Bow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-6xl absolute -top-6"
                >
                  🎀
                </motion.div>

                {/* Question mark */}
                <span className="text-5xl">❓</span>
              </div>

              {/* Glow effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 215, 0, 0.4)',
                    '0 0 40px rgba(255, 215, 0, 0.8)',
                    '0 0 20px rgba(255, 215, 0, 0.4)',
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 rounded-lg pointer-events-none"
              />
            </div>

            {/* Click hint */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-8 font-mono text-neon-blue text-glow"
            >
              TAP TO OPEN
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center space-y-8 max-w-2xl"
        >
          {/* Burst effect */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="fixed pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
              }}
            >
              <motion.div
                animate={{
                  x: Math.cos((i / 20) * Math.PI * 2) * 100,
                  y: Math.sin((i / 20) * Math.PI * 2) * 100,
                }}
                transition={{ duration: 0.6 }}
                className="text-2xl"
              >
                🎉
              </motion.div>
            </motion.div>
          ))}

          {/* Gift contents */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-neon-gold text-glow"
          >
            HAPPY 19TH BIRTHDAY! 🎂
          </motion.h2>

          {/* Photo collage of uploaded photos */}
          {photos.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4 my-8"
            >
              {photos.slice(0, 6).map((photo, idx) => (
                <motion.img
                  key={idx}
                  src={photo}
                  alt={`Memory ${idx}`}
                  className="w-24 h-24 object-cover rounded-lg border-2 border-neon-gold neon-glow-gold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                />
              ))}
            </motion.div>
          )}

          {/* Secret message button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={() => setShowMessage(!showMessage)}
            className="px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
          >
            {showMessage ? 'HIDE MESSAGE' : 'READ SECRET MESSAGE'}
          </motion.button>

          {/* Secret message */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-dark border-2 border-neon-purple rounded-lg p-8"
            >
              <p className="text-neon-purple text-glow font-mono text-sm leading-relaxed">
                "Some people come into our lives and quietly go to the very core of who we are.<br/>
                <br/>
                19 years of you being one of the best people to have around.<br/>
                <br/>
                Here's to more laughter, more memories, and more moments that make life worth living.<br/>
                <br/>
                Happy Birthday, Legend. 🎂✨"
              </p>
            </motion.div>
          )}

          {/* Final button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="pt-8"
          >
            <p className="font-mono text-neon-blue text-xs text-glow">
              🎊 Thank you for letting us celebrate your special day! 🎊
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
