import React from "react";
import { Navbar } from "@/components/navbar";

function About() {
  const teamMembers = [
    {
      name: "MR. PIYUSH GHANGHAV",
      linkedin: "https://www.linkedin.com/in/piyush-ghanghav/",
    },
    {
      name: "MR. YASHODIP KOLHE",
      linkedin: "https://www.linkedin.com/in/yashodip-kolhe-68732a233/",
    },
    {
      name: "MR. VEDANT GORDE",
      linkedin: "https://www.linkedin.com/in/vedant-gorde/",
    },
    {
      name: "MR. SHREEJIT PANGAVHANE",
      linkedin: "https://www.linkedin.com/in/shreejit-pangavhane-564a98238/",
    },
  ];

  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section with exact color match */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#2E6CF6" }}>
              About Our Team
            </h1>
            <p className="text-lg md:text-xl mb-8" style={{ color: "#6B7280" }}>
              We're passionate developers building tools to help you succeed in your career journey. Our AI Interview Assistant is designed to give you the edge in today's competitive job market.
            </p>
            <button className="py-3 px-8 rounded font-medium flex items-center" style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              Begin Your Journey
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg shadow-md overflow-hidden">
              <img 
                src="/api/placeholder/500/350" 
                alt="Workspace with laptop and coffee" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="py-16 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#2E6CF6" }}>Our Final Year Project</h2>
          <p className="mb-6" style={{ color: "#6B7280" }}>
            This is our final year project—a journey of learning, challenges, and triumphs. 
            It's not the biggest, but it holds immense value for us. Each line of code, each test, 
            and every improvement reflects our dedication and passion. Together, we've built something 
            that we're proud to share.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E6CF6" }}>Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-24 flex items-center justify-center" style={{ backgroundColor: "#2E6CF6" }}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold" style={{ color: "#2E6CF6" }}>
                    {member.name.split(' ')[1][0]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#374151" }}>{member.name}</h3>
                  <p className="mb-4" style={{ color: "#6B7280" }}>Team Member</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:underline"
                    style={{ color: "#2E6CF6" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="mr-2"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.866 0-2.152 1.459-2.152 2.967v5.699h-3v-11h2.881v1.507h.041c.401-.759 1.379-1.557 2.841-1.557 3.037 0 3.6 2 3.6 4.604v6.446z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#2E6CF6" }}>What We Offer</h2>
            <p style={{ color: "#6B7280" }} className="max-w-2xl mx-auto">
              Our AI Interview Assistant provides you with everything you need to prepare for your next job interview.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(46, 108, 246, 0.1)", color: "#2E6CF6" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#374151" }}>Mock Interviews</h3>
              <p style={{ color: "#6B7280" }}>Practice with realistic interview scenarios tailored to your target role.</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(46, 108, 246, 0.1)", color: "#2E6CF6" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#374151" }}>Resume Analysis</h3>
              <p style={{ color: "#6B7280" }}>Get detailed feedback on your resume to highlight your strengths and stand out.</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(46, 108, 246, 0.1)", color: "#2E6CF6" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#374151" }}>AI-Driven Insights</h3>
              <p style={{ color: "#6B7280" }}>Receive personalized tips and strategies based on your performance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#2E6CF6" }}>Ready to Ace Your Next Interview?</h2>
          <p className="text-lg mb-8" style={{ color: "#6B7280" }}>Try our AI Interview Assistant and boost your confidence today.</p>
          <button className="py-3 px-8 rounded font-medium" style={{ backgroundColor: "#111827", color: "#FFFFFF" }}>
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" style={{ color: "#2E6CF6" }}>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span className="text-xl font-bold" style={{ color: "#374151" }}>InterviewPro AI</span>
            </div>
          </div>
          <div className="text-sm" style={{ color: "#6B7280" }}>© 2025 All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default About;