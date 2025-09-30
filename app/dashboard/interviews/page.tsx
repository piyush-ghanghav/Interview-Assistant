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
    <div className="min-h-[85vh]  pt-10">
      {/* Animated Background Orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-10  bg-white/10 rounded-xl shadow-sm p-6  pt-10 sm:p-6 min-h-[80vh]">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-white">My Interviews</h1>
          <p className="text-sm text-white/80 backdrop-blur-sm mt-1">
            View all your mock interview sessions
          </p>
        </div>
        <div className=" backdrop-blur-sm">
          <InterviewList
            showViewAll={true}
            page={currentPage}
            limit={interviewsPerPage}
            onTotalCountChange={handleTotalCountChange}
          />
        </div>

        {totalInterviews > interviewsPerPage && (
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`cursor-pointer ${
                      currentPage === 1 ? "opacity-50 pointer-events-none" : ""
                    }`}
                  />
                </PaginationItem>
                {[...Array(Math.ceil(totalInterviews / interviewsPerPage))].map(
                  (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        className="cursor-pointer"
                        isActive={currentPage === i + 1}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`cursor-pointer ${
                      currentPage ===
                      Math.ceil(totalInterviews / interviewsPerPage)
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }`}
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
