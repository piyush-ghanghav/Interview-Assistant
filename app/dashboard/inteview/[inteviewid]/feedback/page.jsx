"use client";

import { db } from "../../../../../utils/db";
import { UserAnswer } from "../../../../../utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../../../_components/@/components/ui/collapsible';
import { 
  ChevronsUpDown, 
  Star, 
  CheckCircle2, 
  XCircle, 
  MessageCircle,
  ChevronLeft,
  BarChart2
} from 'lucide-react';
import { Button } from '../../../_components/@/components/ui/button';
import { useRouter } from 'next/navigation';

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [stats, setStats] = useState({ 
    averageRating: 0,
    totalQuestions: 0,
    goodAnswers: 0,
    needsImprovement: 0 
  });
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.inteviewid))
      .orderBy(UserAnswer.id);

    setFeedbackList(result);
    calculateStats(result);
  };

  const calculateStats = (answers) => {
    const totalRating = answers.reduce((sum, item) => sum + parseInt(item.rating), 0);
    const goodAnswers = answers.filter(item => parseInt(item.rating) >= 7).length;

    setStats({
      averageRating: (totalRating / answers.length).toFixed(1),
      totalQuestions: answers.length,
      goodAnswers,
      needsImprovement: answers.length - goodAnswers
    });
  };

  const getRatingColor = (rating) => {
    const ratingNum = parseInt(rating);
    if (ratingNum >= 8) return 'bg-green-50 text-green-700 border-green-200';
    if (ratingNum >= 5) return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    return 'bg-red-50 text-red-700 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {feedbackList?.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="flex space-x-2">
              <div className="h-3 w-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-3 w-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-3 w-3 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-700">Analyzing your interview...</h2>
          </div>
        ) : (
          <>
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Interview Feedback</h1>
                <Button
                  variant="outline"
                  onClick={() => router.replace("/dashboard")}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back to Dashboard
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="text-blue-600 text-sm font-medium">Average Rating</div>
                  <div className="mt-2 flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-500" />
                    <span className="text-2xl font-bold text-blue-700">{stats.averageRating}</span>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <div className="text-green-600 text-sm font-medium">Good Answers</div>
                  <div className="mt-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-2xl font-bold text-green-700">{stats.goodAnswers}</span>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                  <div className="text-yellow-600 text-sm font-medium">Needs Improvement</div>
                  <div className="mt-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-yellow-500" />
                    <span className="text-2xl font-bold text-yellow-700">{stats.needsImprovement}</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <div className="text-purple-600 text-sm font-medium">Total Questions</div>
                  <div className="mt-2 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-2xl font-bold text-purple-700">{stats.totalQuestions}</span>
                  </div>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {feedbackList.map((item, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-200">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                            {index + 1}
                          </div>
                          <span className="text-gray-900 font-medium">{item.question}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(item.rating)}`}>
                            Rating: {item.rating}/10
                          </span>
                          <ChevronsUpDown className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 p-4 bg-gray-50 rounded-lg space-y-4">
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Your Answer</h3>
                            <p className="text-gray-900">{item.userAns}</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h3 className="text-sm font-medium text-green-700 mb-2">Model Answer</h3>
                            <p className="text-green-900">{item.correctAns}</p>
                          </div>
                          {parseInt(item.rating) < 7 && (
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                              <h3 className="text-sm font-medium text-yellow-700 mb-2">Improvement Areas</h3>
                              <ul className="list-disc list-inside text-yellow-900 text-sm">
                                <li>Focus on providing more specific examples</li>
                                <li>Structure your answer using the STAR method</li>
                                <li>Include technical details where relevant</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Feedback;
