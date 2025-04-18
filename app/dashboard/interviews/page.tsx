"use client";

import  InterviewList  from "../_components/InterviewList";

export default function InterviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto mt-5">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            My Interviews
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View all your mock interview sessions
          </p>
        </div>

        <InterviewList showViewAll={true} />
      </div>
    </div>
  );
}