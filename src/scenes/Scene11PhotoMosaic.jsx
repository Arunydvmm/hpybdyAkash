import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Scene11PhotoMosaic({ onNext, photos }) {
  const [showMosaic, setShowMosaic] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    if (photos.length > 0) {
      setTimeout(() => setShowMosaic(true), 1000)
    }
  }, [photos])

  const displayPhotos = photos.length > 0 ? photos : Array.from({ length: 6 }).map((_, i) => `/placeholder-${i}.jpg`)

  const mosaicPhotos = displayPhotos.map((photo, i) => ({
    id: i,
    src: photo,
    delay: i * 0.1,
    size: ['w-32', 'w-40', 'w-32', 'w-40', 'w-36', 'w-32'][i % 6],
  }))

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
        <h1 className="text-3xl font-bold text-neon-gold text-glow">PHOTO MOSAIC</h1>
        <p className="font-mono text-neon-blue text-sm mt-2">Assembling memories...</p>
      </motion.div>

      {/* Mosaic container */}
      <motion.div
        className="relative w-full max-w-4xl h-96 flex flex-wrap gap-4 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showMosaic ? 1 : 0 }}
      >
        {mosaicPhotos.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.6 }}
            onClick={() => setSelectedPhoto(item.src)}
            className={`${item.size} h-32 cursor-pointer relative overflow-hidden rounded-lg border-2 border-neon-gold neon-glow-gold`}
          >
            {typeof item.src === 'string' && item.src.startsWith('data:') ? (
              <img
                src={item.src}
                alt={`Memory ${idx}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Full screen photo view */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            src={selectedPhoto}
            alt="Full screen"
            className="max-w-lg max-h-lg object-cover rounded-lg border-4 border-neon-gold"
          />
        </motion.div>
      )}

      {/* Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-center mt-8"
      >
        <p className="font-mono text-neon-blue text-sm">Every moment matters ✨</p>
      </motion.div>

      {/* Navigation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm font-mono bg-gradient-to-r from-neon-blue to-neon-cyan text-black rounded-lg hover:shadow-lg neon-glow transition-all hover:scale-105"
      >
        FINAL MESSAGE →
      </motion.button>
    </motion.div>
  )
}
