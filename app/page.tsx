import { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'

export const metadata: Metadata = {
  title: 'AI Interview Assistant - Practice Interviews with AI',
  description: 'Prepare for your next interview with our AI-powered interview assistant. Practice real-world scenarios and get instant feedback.',
  keywords: ['interview practice', 'AI interview', 'mock interview', 'interview preparation'],
  openGraph: {
    title: 'AI Interview Assistant',
    description: 'Practice interviews with AI feedback',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Interview Assistant'
      }
    ]
  }
}

export default async function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<HomePageLoader />}>
        <Hero />
      </Suspense>
    </main>
  )
}

function HomePageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500" />
    </div>
  )
}

