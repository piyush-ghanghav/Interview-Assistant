
"use client";

import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import AddNewInterview from "./_components/addNewInterview";
import InterviewList from "./_components/InterviewList";
import { BookOpen, Sparkles } from "lucide-react";
import { StatsGrid } from "./_components/dashboardStats";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="pt-5" >
      {/* Glass Card Container */}
      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 sm:p-6 lg:p-6 min-h-[80vh] max-h-[86vh]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-6">
          {/* Left: Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                  Your Interview Workspace
                </h1>
                
              </div>
            </div>
          </div>

          {/* Right: User Profile */}
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-2 pr-4 border border-white/20 hover:bg-white/20 transition-all duration-300 self-start md:self-auto">
            <UserButton afterSignOutUrl="/" />
            {user && (
              <div className="ml-3 flex flex-col">
                <span className="text-sm font-medium text-white">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Left Column - Actions & Stats */}
          <div className="space-y-6 lg:col-span-1 min-h-[70vh]">
            {/* Add New Interview Card */}
            <div className=" backdrop-blur-sm rounded-2xl p-2 group">
              <AddNewInterview />
            </div>

            {/* Stats Card */}
            <div className="backdrop-blur-sm rounded-2xl p-4">
              <StatsGrid />
            </div>
          </div>

          {/* Right Column - Interview List */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-sm rounded-2xl p-6  min-h-[70vh]">
              <div className="overflow-auto">
                <InterviewList limit={6}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;