"use client";

import { useState } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { processFileWithGemini } from '@/utils/gemini';

interface FileUploadProps {
  onAnalysisComplete: (result: any) => void;
}

export function FileUpload({ onAnalysisComplete }: FileUploadProps) {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['.pdf', '.doc', '.docx', '.txt'];
    const fileType = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    
    if (!validTypes.includes(fileType)) {
      setError('Please upload a PDF, DOC, DOCX, or TXT file');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB');
      return;
    }

    setResume(file);
    setError(null);
  };

  const handleAnalysis = async () => {
    if (!resume || !jobDescription || !user) return;

    try {
      setIsLoading(true);
      setError(null);

      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const resumeText = e.target?.result as string;
          const result = await processFileWithGemini(resumeText, jobDescription);
          onAnalysisComplete(result);
        } catch (error) {
          console.error('Analysis failed:', error);
          setError('Failed to analyze resume. Please try again.');
        } finally {
          setIsLoading(false);
        }
      };

      reader.onerror = () => {
        setError('Error reading file');
        setIsLoading(false);
      };

      reader.readAsText(resume);
    } catch (error) {
      console.error('Analysis failed:', error);
      setError('Failed to analyze resume. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Resume (PDF/DOC)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg hover:border-gray-400 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex flex-col items-center text-sm text-gray-600">
                <label 
                  htmlFor="resume-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 hover:text-blue-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
                {resume && (
                  <p className="mt-2 text-gray-500">{resume.name}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Description
          </label>
          <Textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="h-[150px]"
          />
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-500 bg-red-50 p-3 rounded-md">
          {error}
        </div>
      )}

      <Button 
        onClick={handleAnalysis} 
        disabled={!resume || !jobDescription || isLoading}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analyzing...
          </>
        ) : (
          'Analyze Resume'
        )}
      </Button>
    </div>
  );
}