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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <Construction className="w-16 h-16 mx-auto text-blue-500 animate-bounce" />
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Coming Soon
        </h1>
        
        <p className="text-lg text-gray-600">
          We're working hard to bring you something amazing
        </p>

        <div className="space-y-2">
          <Progress value={progress} className="h-2 w-full" />
          <p className="text-sm text-gray-500">
            Development in progress: {progress}%
          </p>
        </div>

        <div className="pt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Features coming up:
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>✨ Enhanced interview analytics</li>
            <li>🎯 Personalized feedback system</li>
            <li>🤖 Advanced AI interviewer</li>
            <li>📊 Performance tracking</li>
          </ul>
        </div>
      </div>
    </div>
  )
}