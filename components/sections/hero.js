"use client";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1738005787790-cdd55b3bddec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-slate-900/80 to-black/90" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              Ace Your Next Interview with Confidence
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Personalized mock interviews, resume analysis, and AI-driven insights to prepare you for your dream role.
            </p>
            <Link href="/dashboard">
              <button className="group px-8 py-4 bg-gray-200 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2">
                Begin Your Journey
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform relative">
              {/* <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Live Demo
              </div> */}
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80"
                alt="Interview Interface"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}