import React from "react";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      
      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-5 md:mx-20 lg:mx-36 pb-10">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
