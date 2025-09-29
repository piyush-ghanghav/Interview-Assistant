import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

function About() {
  const teamMembers = [
    {
      name: "Piyush Ghanghav",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/piyush-ghanghav/",
      initial: "P",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Yashodip Kolhe",
      role: "AI/ML Engineer",
      linkedin: "https://www.linkedin.com/in/yashodip-kolhe-68732a233/",
      initial: "Y",
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Vedant Gorde",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/vedant-gorde/",
      initial: "V",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Shreejit Pangavhane",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/shreejit-pangavhane-564a98238/",
      initial: "S",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section with Background */}
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          alt="Modern workspace"
          src="https://images.unsplash.com/photo-1738005787790-cdd55b3bddec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-blue-200 text-sm font-medium">
              ✨ Final Year Project 2025
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Meet the Minds
            <br />
            Behind InterviewPro AI
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Four passionate developers on a mission to revolutionize interview
            preparation with cutting-edge AI technology
          </p>

          <Link href="/dashboard">
            <button className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2">
              Begin Your Journey
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 shadow-lg -mt-16 relative z-20 mx-6 md:mx-12 rounded-2xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Hours Invested</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">AI</div>
              <div className="text-gray-600">Powered Platform</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                2025
              </div>
              <div className="text-gray-600">Launch Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is more than just a final year project—it's a journey of
              learning, challenges, and triumphs. Each line of code, every test,
              and all the late-night debugging sessions reflect our dedication
              and passion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We set out to solve a real problem: helping job seekers prepare
              for interviews with confidence. What started as an idea has
              evolved into an AI-powered platform that we're genuinely proud to
              share with the world.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four individuals, one shared vision: empowering job seekers
              worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
                  {/* Gradient Header */}
                  <div
                    className={`h-32 bg-gradient-to-br ${member.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/20 rounded-full"></div>
                    <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
                  </div>

                  {/* Avatar */}
                  <div className="relative px-6 -mt-12">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-xl mx-auto transform group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {member.initial}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-6 pt-4 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </p>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group/link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="group-hover/link:scale-110 transition-transform"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.866 0-2.152 1.459-2.152 2.967v5.699h-3v-11h2.881v1.507h.041c.401-.759 1.379-1.557 2.841-1.557 3.037 0 3.6 2 3.6 4.604v6.446z" />
                      </svg>
                      <span className="text-sm font-medium">Connect</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Built
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you ace every interview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI Mock Interviews
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Practice with realistic interview scenarios powered by advanced
                AI. Get real-time feedback tailored to your target role.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Smart Resume Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get detailed, actionable feedback on your resume. Highlight your
                strengths and stand out from the competition.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Performance Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receive personalized tips and strategies based on your
                performance. Track your progress and improve continuously.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of job seekers who are already using InterviewPro AI
            to land their dream jobs
          </p>

          <Link href="/dashboard">
            <button className="group px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center gap-3">
              Get Started Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white">
                  InterviewPro AI
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering your career journey
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2025 InterviewPro AI. All Rights Reserved
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Made with ❤️ by Team InterviewPro
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
