"use client";

import { useState } from 'react';
import { FileUpload } from './_components/fileUpload';
import { ComparisonResult } from './_components/comparisonResult';

export default function ResumeAnalyzerPage() {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto mt-5">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Resume Analyzer</h1>
          <p className="text-sm text-gray-500 mt-1">
            Upload your resume and job description to get detailed analysis and suggestions
          </p>
        </div>

        <FileUpload onAnalysisComplete={setAnalysisResult} />
        
        {analysisResult && <ComparisonResult result={analysisResult} />}
      </div>
    </div>
  );
}