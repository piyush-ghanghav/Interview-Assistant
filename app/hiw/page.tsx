"use client"
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

const steps = [
  { 
    title: "Sign Up or Log In", 
    description: "Create your account to unlock all the features and personalize your experience.",
    icon: "👤",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    title: "Authenticate Securely", 
    description: "Your data is protected with industry-leading encryption and security measures.",
    icon: "🔒",
    color: "from-indigo-500 to-purple-600"
  },
  { 
    title: "Provide Interview Details", 
    description: "Share the specifics of your interview for a customized preparation plan.",
    icon: "📝",
    color: "from-purple-500 to-pink-600"
  },
  { 
    title: "Enable Camera and Microphone", 
    description: "Simulate a realistic interview environment with video and audio access.",
    icon: "🎥",
    color: "from-pink-500 to-rose-600"
  },
  { 
    title: "Receive Tailored Questions", 
    description: "Get questions tailored to your job role and industry preferences.",
    icon: "❓",
    color: "from-orange-500 to-red-600"
  },
  { 
    title: "Answer in Real-Time", 
    description: "Practice your responses in a live setting for the best preparation.",
    icon: "💬",
    color: "from-green-500 to-emerald-600"
  },
  { 
    title: "Audio Transcription", 
    description: "Your spoken answers are converted into text for easy review.",
    icon: "🎙️",
    color: "from-teal-500 to-cyan-600"
  },
  { 
    title: "Insightful AI Feedback", 
    description: "Receive actionable feedback to enhance your confidence and performance.",
    icon: "✨",
    color: "from-blue-500 to-indigo-600"
  },
];

const faqs = [
  { question: "What do I need to use this app?", answer: "Just a device with a camera and microphone—no extra equipment required." },
  { question: "How does the feedback work?", answer: "Our AI evaluates your answers for clarity, relevance, and confidence, providing detailed insights to help you improve." },
  { question: "Can I customize the practice session?", answer: "Absolutely! Tailor questions based on your interview specifics, job role, and industry to get the most relevant practice." },
  { question: "Is my data private?", answer: "Yes, your data is encrypted end-to-end and handled with utmost care. We never share your information with third parties." },
  { question: "How often can I practice?", answer: "As often as you need. Practice makes perfect! Our platform is available 24/7 for unlimited practice sessions." },
];

function App() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          alt="Modern workspace"
          src="https://images.unsplash.com/photo-1738005787790-cdd55b3bddec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
    
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Prepare Smarter,<br />
            <span className="text-blue-200">Interview Better</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Your AI-Powered Interview Assistant - Master every interview with confidence
          </p>
          
          <Link href="/dashboard">
          <button className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2">
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Eight simple steps to interview success
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 hidden lg:block transform -translate-x-1/2 rounded-full" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2 ${
                      i % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-bold text-gray-400">STEP {i + 1}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center shadow-lg z-10 border-4 border-white">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about InterviewPro AI
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "max-h-96" : "max-h-0"
                }`}>
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Interviews?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of job seekers who have already boosted their confidence and landed their dream jobs with InterviewPro AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center gap-3">
              Start Free Trial
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
            
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50">
              Watch Demo
            </button>
          </div>
          
          <p className="mt-6 text-blue-200 text-sm">
            ✨ No credit card required • Get started in under 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white">InterviewPro AI</span>
              </div>
              <p className="text-gray-400 text-sm">Start your journey to interview success today!</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 InterviewPro AI. All Rights Reserved</p>
              <p className="text-gray-500 text-sm mt-1">Made with ❤️ by Team InterviewPro</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;