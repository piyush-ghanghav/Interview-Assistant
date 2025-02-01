import React from "react";
import Header from '../dashboard/_components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Reduced padding */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 leading-tight">Prepare Smarter, Interview Better</h1>
          <p className="text-lg opacity-90">Your AI-Powered Interview Assistant</p>
        </div>
      </section>

      {/* How It Works Section - Optimized spacing */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">How It Works: Your Journey to Success</h2>
        <div className="relative">
          <div className="border-l-4 border-indigo-600/30 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {[
            {
              title: "Sign Up or Log In",
              description: "Create your account to unlock all the features and personalize your experience."
            },
            {
              title: "Authenticate Securely",
              description: "Your data is protected with industry-leading encryption and security measures."
            },
            {
              title: "Provide Interview Details",
              description: "Share the specifics of your interview for a customized preparation plan."
            },
            {
              title: "Enable Camera and Microphone",
              description: "Simulate a realistic interview environment with video and audio access."
            },
            {
              title: "Receive Tailored Questions",
              description: "Get questions tailored to your job role and industry preferences."
            },
            {
              title: "Answer in Real-Time",
              description: "Practice your responses in a live setting for the best preparation."
            },
            {
              title: "Audio Transcription",
              description: "Your spoken answers are converted into text for easy review."
            },
            {
              title: "Insightful AI Feedback",
              description: "Receive actionable feedback to enhance your confidence and performance."
            }
          ].map((step, index) => (
            <div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} mb-8 relative`}
            >
              <div className="bg-indigo-600 text-white flex items-center justify-center w-8 h-8 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold shadow-md shadow-indigo-600/20">
                {index + 1}
              </div>
              <div className={`bg-white shadow-md rounded-lg p-6 w-5/12 ${index % 2 === 0 ? "ml-auto" : "mr-auto"} hover:shadow-lg transition-shadow duration-300`}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section - Reduced spacing */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[{
              question: "What do I need to use this app?",
              answer: "Just a device with a camera and microphone—no extra equipment required."
            }, {
              question: "How does the feedback work?",
              answer: "Our AI evaluates your answers for clarity, relevance, and confidence."
            }, {
              question: "Can I customize the practice session?",
              answer: "Absolutely! Tailor questions based on your interview specifics."
            }, {
              question: "Is my data private?",
              answer: "Yes, your data is encrypted and handled with utmost care."
            }, {
              question: "How often can I practice?",
              answer: "As often as you need. Practice makes perfect!"
            }].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <summary className="cursor-pointer p-4 font-semibold text-gray-800 flex items-center justify-between text-sm">
                  {faq.question}
                  <span className="transform group-open:rotate-180 transition-transform duration-200">
                    ▼
                  </span>
                </summary>
                <p className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section - Reduced padding */}
      <footer className="bg-gradient-to-r from-indigo-700 to-indigo-600 text-white py-8 px-4 text-center">
        <p className="text-sm opacity-90">Start your journey to interview success today! &copy; 2024 InterviewPrep</p>
      </footer>
    </div>
  );
}

export default App;