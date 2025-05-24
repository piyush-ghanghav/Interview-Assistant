"use client";

import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import AddNewInterview from "./_components/addNewInterview";
import InterviewList from "./_components/InterviewList";
import { BookOpen } from "lucide-react";
import { StatsGrid } from "./_components/dashboardStats";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto mt-5">
      <div className="max-w-7xl mx-auto bg-white  p-4 sm:p-6 flex flex-col">
        
        <div className="relative mb-6">
          <div className="absolute top-0 right-0 flex items-center space-x-3 md:flex">
            <div className="flex items-center">
              <UserButton afterSignOutUrl="/" />
              {user && (
                <div className="ml-2 flex flex-col text-gray-900 font-medium hover:bg-gray-100 rounded-md p-2 transition-colors duration-200">
                  <span className="text-sm">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-gray-700" />
              <h1 className="text-2xl font-semibold text-gray-900">
                Your Interview Workspace
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <AddNewInterview />
            </div>
            <StatsGrid />
          </div>

          <div className="col-span-1 sm:col-span-2 grid grid-rows-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className=" min-h-full overflow-auto">
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
