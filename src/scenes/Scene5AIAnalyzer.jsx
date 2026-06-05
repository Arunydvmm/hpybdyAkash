import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Scene5AIAnalyzer({ onNext }) {
  const [stats, setStats] = useState({
    friendship: 0,
    loyalty: 0,
    study: 0,
    attendance: 0,
    humor: 0,
    reply: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        friendship: Math.min(prev.friendship + Math.random() * 10, 100),
        loyalty: Math.min(prev.loyalty + Math.random() * 10, 100),
        study: Math.min(prev.study + Math.random() * 10, 100),
        attendance: Math.min(prev.attendance + Math.random() * 10, 60),
        humor: Math.min(prev.humor + Math.random() * 15, 100),
        reply: Math.min(prev.reply + Math.random() * 8, 90),
      }))
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const statItems = [
    { label: 'Friendship Level', value: Math.floor(stats.friendship), max: 100, color: 'neon-blue' },
    { label: 'Loyalty', value: 'Legendary', color: 'neon-gold' },
    { label: 'Study Mode', value: 'Sometimes Available', color: 'neon-purple' },
    { label: 'Attendance', value: Math.floor(stats.attendance) + '%', max: 100, color: 'neon-blue' },
    { label: 'Humor', value: Math.floor(stats.humor) + '% Dangerous', max: 100, color: 'neon-gold' },
    { label: 'Reply Speed', value: Math.floor(stats.reply) + '% Selective', max: 100, color: 'neon-blue' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black p-6 overflow-y-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-neon-gold text-glow mb-2">AI AKASH ANALYZER</h1>
        <p className="font-mono text-neon-blue text-sm">Analyzing Subject Parameters...</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {statItems.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass-dark border-2 border-${stat.color} rounded-lg p-6`}
          >
            <p className={`font-mono text-${stat.color} text-xs mb-3`}>{stat.label}</p>
            {stat.max ? (
              <>
                <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden mb-2">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-${stat.color} to-neon-cyan`}
                    style={{ width: `${stat.value}%` }}
                    animate={{ width: `${stat.value}%` }}
                  />
                </div>
                <motion.p
                  className={`text-${stat.color} font-bold text-lg text-glow`}
                  key={stat.value}
                >
                  {stat.value}%
                </motion.p>
              </>
            ) : (
              <motion.p
                className={`text-${stat.color} font-bold text-lg text-glow`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                {stat.value}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Secret contact notice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-2xl mx-auto glass-dark border-2 border-neon-purple rounded-lg p-6 text-center mb-12"
      >
        <p className="font-mono text-neon-purple text-glow">
          🔐 SECRET CONTACT: ENCRYPTED
        </p>
        <p className="font-mono text-neon-blue/50 text-xs mt-2">
          Access level insufficient
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
        NEXT SCAN →
      </motion.button>
    </motion.div>
  )
}
