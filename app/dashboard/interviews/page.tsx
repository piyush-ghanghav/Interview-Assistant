"use client";

import { useState } from "react";
import InterviewList from "../_components/InterviewList";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function InterviewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalInterviews, setTotalInterviews] = useState(0);
  const interviewsPerPage = 9;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTotalCountChange = (count: number) => {
    setTotalInterviews(count);
  };

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

        <InterviewList 
          showViewAll={true} 
          page={currentPage}
          limit={interviewsPerPage}
          onTotalCountChange={handleTotalCountChange}
        />

        {totalInterviews > interviewsPerPage && (
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
                  />
                </PaginationItem>
                {[...Array(Math.ceil(totalInterviews / interviewsPerPage))].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      className="cursor-pointer"
                      isActive={currentPage === i + 1}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`cursor-pointer ${currentPage === Math.ceil(totalInterviews / interviewsPerPage) ? 'opacity-50 pointer-events-none' : ''}`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}