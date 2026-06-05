import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Scene3MemoryArchive({ onNext, photos, setPhotos }) {
  const [revealedCards, setRevealedCards] = useState({})

  const memoryMessages = [
    'Rare specimen located.',
    'Confidence level detected.',
    'Main character energy found.',
    'Evidence archived.',
    'Legend status confirmed.',
    'Memories locked in time.',
  ]

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files)
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (event) => {
        setPhotos([...photos, event.target.result])
      }
      reader.readAsDataURL(file)
    })
  }

  const toggleCard = (index) => {
    setRevealedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black overflow-y-auto p-6 relative"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-neon-gold text-glow mb-2">MEMORY ARCHIVE</h1>
        <p className="font-mono text-neon-blue text-sm">Click cards to unlock memories</p>
      </motion.div>

      {/* Upload Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mb-12"
      >
        <label className="glass px-8 py-4 rounded-lg cursor-pointer hover:border-neon-gold border-neon-blue transition-all border-2">
          <span className="font-mono text-neon-blue">+ UPLOAD MEMORIES</span>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>
      </motion.div>

      {/* Memory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              onClick={() => toggleCard(index)}
              className="cursor-pointer h-80 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {!revealedCards[index] ? (
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 212, 255, 0.3)',
                      '0 0 30px rgba(0, 212, 255, 0.6)',
                      '0 0 10px rgba(0, 212, 255, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-full h-full glass border-2 border-neon-blue rounded-xl flex flex-col items-center justify-center p-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl mb-4"
                  >
                    🔒
                  </motion.div>
                  <p className="font-mono text-neon-blue text-center text-sm">
                    {memoryMessages[index % memoryMessages.length]}
                  </p>
                  <p className="font-mono text-neon-blue/50 text-xs mt-4">CLICK TO UNLOCK</p>
                </motion.div>
              ) : (
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={photo}
                  alt={`Memory ${index}`}
                  className="w-full h-full object-cover rounded-xl border-2 border-neon-gold neon-glow-gold"
                />
              )}
            </motion.div>
          </motion.div>
        ))}

        {/* Placeholder cards if no photos */}
        {photos.length === 0 && (
          Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="h-80 glass border-2 border-neon-blue/30 rounded-xl flex items-center justify-center"
            >
              <p className="font-mono text-neon-blue/50 text-center">Upload photos to fill</p>
            </motion.div>
          ))
        )}
      </div>

      {/* Navigation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
      >
        PROCEED →
      </motion.button>
    </motion.div>
  )
}
