import React from 'react'
import { motion } from 'framer-motion'

export default function ThemeSelector({ theme, setTheme }) {
  const themes = [
    {
      id: 'neon',
      name: 'Neon Dark',
      description: 'Cyberpunk luxury vibes',
      colors: 'from-neon-blue to-neon-gold',
      preview: 'bg-gradient-to-r from-blue-500 to-yellow-500'
    },
    {
      id: 'ocean',
      name: 'Ocean Vibes',
      description: 'Deep blue & cyan waters',
      colors: 'from-blue-600 to-cyan-400',
      preview: 'bg-gradient-to-r from-blue-600 to-cyan-400'
    },
    {
      id: 'sunset',
      name: 'Sunset Paradise',
      description: 'Warm orange & pink',
      colors: 'from-orange-500 to-pink-500',
      preview: 'bg-gradient-to-r from-orange-500 to-pink-500'
    },
    {
      id: 'forest',
      name: 'Forest Green',
      description: 'Nature green & lime',
      colors: 'from-green-600 to-lime-400',
      preview: 'bg-gradient-to-r from-green-600 to-lime-400'
    },
    {
      id: 'purple',
      name: 'Purple Royalty',
      description: 'Majestic purple vibes',
      colors: 'from-purple-600 to-pink-400',
      preview: 'bg-gradient-to-r from-purple-600 to-pink-400'
    },
    {
      id: 'retro',
      name: 'Retro 80s',
      description: 'Classic neon 80s',
      colors: 'from-pink-500 to-purple-500',
      preview: 'bg-gradient-to-r from-pink-500 to-purple-500'
    },
  ]

  return (
    <div className="fixed top-20 right-4 z-50 max-h-96 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-dark border-2 border-neon-blue rounded-lg p-4 space-y-3 max-w-xs"
      >
        <p className="font-mono text-neon-blue text-sm font-bold mb-3">🎨 THEMES</p>
        
        {themes.map((t) => (
          <motion.button
            key={t.id}
            onClick={() => setTheme(t.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
              theme === t.id
                ? 'border-neon-gold neon-glow-gold'
                : 'border-neon-blue/30 hover:border-neon-blue'
            }`}
          >
            <div className={`w-full h-8 rounded mb-2 ${t.preview}`} />
            <p className="font-mono text-xs font-bold text-neon-gold">{t.name}</p>
            <p className="font-mono text-xs text-neon-blue/70">{t.description}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
