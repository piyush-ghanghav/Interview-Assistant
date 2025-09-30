"use client"

import { Construction } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from 'react'

export default function ProgressPage() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-[85vh]  pt-10">
      {/* Animated Background Orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "1s" }}
      />
    <div className="min-h-[80vh] flex flex-col items-center bg-white/10 rounded-md justify-center p-4">
      <div className="w-full max-w-md space-y- 6 text-center">
        <Construction className="w-16 h-16 mx-auto text-blue-500 animate-bounce" />
        
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Coming Soon
        </h1>
        
        <p className="text-lg text-white/80">
          We're working hard to bring you something amazing
        </p>

        <div className="space-y-2">
          <Progress value={progress} className="h-2 w-full" />
          <p className="text-sm text-white/80">
            Development in progress: {progress}%
          </p>
        </div>

        <div className="pt-8">
          <h2 className="text-lg font-semibold text-white/80 mb-3">
            Features coming up:
          </h2>
          <ul className="space-y-2 text-white/60">
            <li>✨ Enhanced interview analytics</li>
            <li>🎯 Personalized feedback system</li>
            <li>🤖 Advanced AI interviewer</li>
            <li>📊 Performance tracking</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}