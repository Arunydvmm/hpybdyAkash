import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Scene1ClassifiedAccess from './scenes/Scene1ClassifiedAccess'
import Scene2DigitalPassport from './scenes/Scene2DigitalPassport'
import Scene3MemoryArchive from './scenes/Scene3MemoryArchive'
import Scene4PhotoGalaxy from './scenes/Scene4PhotoGalaxy'
import Scene6RoastZone from './scenes/Scene6RoastZone'
import Scene7EasterEggs from './scenes/Scene7EasterEggs'
import Scene8MemoryLetter from './scenes/Scene8MemoryLetter'
import Scene9CakeCeremony from './scenes/Scene9CakeCeremony'
import Scene10Celebration from './scenes/Scene10Celebration'
import Scene11PhotoMosaic from './scenes/Scene11PhotoMosaic'
import Scene12FinalMessage from './scenes/Scene12FinalMessage'
import Scene13GiftBox from './scenes/Scene13GiftBox'
import AudioController from './components/AudioController'
import ThemeSelector from './components/ThemeSelector'

export default function App() {
  const [currentScene, setCurrentScene] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [photos, setPhotos] = useState([])
  const [theme, setTheme] = useState('love')

  const scenes = [
    Scene1ClassifiedAccess,
    Scene2DigitalPassport,
    Scene3MemoryArchive,
    Scene4PhotoGalaxy,
    Scene6RoastZone,
    Scene7EasterEggs,
    Scene8MemoryLetter,
    Scene9CakeCeremony,
    Scene10Celebration,
    Scene11PhotoMosaic,
    Scene12FinalMessage,
    Scene13GiftBox,
  ]

  const CurrentScene = scenes[currentScene]

  const handleNextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1)
    }
  }

  const handlePreviousScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1)
    }
  }

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-[0.03]" />

      {/* Background animated elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-[#0a0a1a] to-black opacity-50" />

      {/* Scene Container */}
      <AnimatePresence mode="wait">
        <CurrentScene
          key={currentScene}
          onNext={handleNextScene}
          onPrevious={handlePreviousScene}
          photos={photos}
          setPhotos={setPhotos}
          isMuted={isMuted}
        />
      </AnimatePresence>

      {/* Audio Controller */}
      <AudioController isMuted={isMuted} setIsMuted={setIsMuted} />

      {/* Theme Selector */}
      <ThemeSelector theme={theme} setTheme={setTheme} />

      {/* Scene Counter */}
      <div className="fixed bottom-4 left-4 text-pink-400 text-xs font-mono opacity-50 pointer-events-none">
        SCENE {currentScene + 1}/{scenes.length}
      </div>

      {/* Navigation hints */}
      {currentScene > 0 && (
        <button
          onClick={handlePreviousScene}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 text-neon-blue opacity-50 hover:opacity-100 transition-opacity z-50"
        >
          ← PREVIOUS
        </button>
      )}
    </div>
  )
}
