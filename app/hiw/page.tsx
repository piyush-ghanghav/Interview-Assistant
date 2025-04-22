import React from "react";
import { Navbar } from "@/components/navbar";

const steps = [
  { title: "Sign Up or Log In", description: "Create your account to unlock all the features and personalize your experience." },
  { title: "Authenticate Securely", description: "Your data is protected with industry-leading encryption and security measures." },
  { title: "Provide Interview Details", description: "Share the specifics of your interview for a customized preparation plan." },
  { title: "Enable Camera and Microphone", description: "Simulate a realistic interview environment with video and audio access." },
  { title: "Receive Tailored Questions", description: "Get questions tailored to your job role and industry preferences." },
  { title: "Answer in Real‑Time", description: "Practice your responses in a live setting for the best preparation." },
  { title: "Audio Transcription", description: "Your spoken answers are converted into text for easy review." },
  { title: "Insightful AI Feedback", description: "Receive actionable feedback to enhance your confidence and performance." },
];

const faqs = [
  { question: "What do I need to use this app?", answer: "Just a device with a camera and microphone—no extra equipment required." },
  { question: "How does the feedback work?", answer: "Our AI evaluates your answers for clarity, relevance, and confidence." },
  { question: "Can I customize the practice session?", answer: "Absolutely! Tailor questions based on your interview specifics." },
  { question: "Is my data private?", answer: "Yes, your data is encrypted and handled with utmost care." },
  { question: "How often can I practice?", answer: "As often as you need. Practice makes perfect!" },
];

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#F9FAFB] text-[#2E6CF6] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Prepare Smarter, <span className="text-[#111827]">Interview Better</span>
          </h1>
          <p className="text-lg text-[#6B7280]">Your AI‑Powered Interview Assistant</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#111827]">
          How It Works: Your Journey to Success
        </h2>
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-400/30 hidden md:block" />

          <div className="grid md:grid-cols-2 gap-8 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative ${
                  i % 2 === 0 
                    ? "md:pr-12"
                    : "md:pl-12 md:col-start-2"
                }`}
              >
                {/* Arrow Indicator - Rotating in opposite directions */}
                <div 
                  className={`
                    hidden md:flex absolute -translate-y-1/2
                    ${i % 2 === 0 
                      ? "right-0 translate-x-1/2 top-[25%]" 
                      : "left-0.5 -translate-x-1/2 top-[75%]"
                    }
                    w-8 h-8 bg-blue-400/30 text-white items-center justify-center
                    transition-all duration-300 hover:scale-110
                    ${i % 2 === 0 
                      ? "rotate-[-90deg]" // Anticlockwise rotation for even numbers
                      : "rotate-[90deg]"    // Clockwise rotation for odd numbers
                    }
                  `}
                  style={{
                    clipPath: "polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%)" // Same triangle shape for both
                  }}
                />

              

                {/* Content Card */}
                <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#111827]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <summary className="p-4 flex justify-between items-center cursor-pointer text-sm font-semibold text-[#111827]">
                  {faq.question}
                  <span className="transform group-open:rotate-180 transition-transform duration-200">
                    ▼
                  </span>
                </summary>
                <p className="px-4 pb-4 text-sm text-[#6B7280] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-8 px-4 text-center">
        <p className="text-sm opacity-90">
          Start your journey to interview success today! © 2024 InterviewPrep
        </p>
      </footer>
    </div>
  );
}

export default App;
