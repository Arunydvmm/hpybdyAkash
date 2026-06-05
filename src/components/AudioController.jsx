import React from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioController({ isMuted, setIsMuted }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="glass p-3 rounded-full text-neon-blue hover:neon-glow transition-all duration-300 flex items-center justify-center"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}
