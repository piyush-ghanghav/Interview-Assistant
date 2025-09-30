"use client";

import React, { useEffect, useState } from "react";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { db } from "@/utils/db";
import Webcam from "react-webcam";
import {
  WebcamIcon,
  Briefcase,
  Code,
  Clock,
  FileText,
  AlertCircle,
  MoveRight,
} from "lucide-react";
import { Button } from "../../_components/@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetInterviewDetails();
  }, [params.inteviewid]);

  const GetInterviewDetails = async () => {
    try {
      setLoading(true);
      if (!params.inteviewid) return;

      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.inteviewid));

      if (Array.isArray(result) && result.length > 0) {
        setInterviewData(result[0]);
      }
    } catch (error) {
      console.error("Error fetching interview details:", error);
    } finally {
      setLoading(false);
    }
  };

  const requestWebcamPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setWebcamEnabled(true);
    } catch (error) {
      alert(
        "Could not access the webcam and microphone. Please check your permissions."
      );
    }
  };

  return (
    <div className="min-h-[80vh] max-h-[86vh] bg-white/10 rounded-lg p-5">
      <div className="mx-5 space-y-6">
        {/* Instructions Card */}
        <div className="bg-white/10 rounded-lg overflow-hidden">
          <div className="p-3 border-l-8 border-blue-500 flex items-start space-x-4">
            <AlertCircle className="h-6  w-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-md text-white">
                Interview Instructions
              </h3>
              <p className="mt-1 text-white/80">
                Enable your webcam and microphone to begin. You'll face 10
                questions, and we'll provide a comprehensive evaluation report
                afterward.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Job Details Card */}
          <div className="bg-white/10 rounded-xl shadow-md p-6 space-y-6">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-500" />
              Interview Details
            </h2>

            {loading ? (
              <div className="animate-pulse space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-3/4"></div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80">
                    <Code className="h-4 w-4" />
                    <span className="text-sm font-medium">Role</span>
                  </div>
                  <p className="text-gray-200 pl-5">{interviewData?.jobPosition}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm font-medium">Description</span>
                  </div>
                  <p className="text-white whitespace-pre-line  pl-5">
                    {interviewData?.jobDesc?.split("\n").slice(0, 3).join("\n")}
                    {interviewData?.jobDesc &&
                      interviewData.jobDesc.split("\n").length > 3 &&
                      " ..."}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">Experience</span>
                  </div>
                  <p className="text-white  pl-5">{interviewData?.jobExp} years</p>
                </div>
              </div>
            )}
          </div>

          {/* Webcam Card */}
          <div className="bg-white/10 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Camera Preview
            </h2>
            <div className="aspect-video bg-white/10 rounded-lg overflow-hidden mb-4">
              {webcamEnabled ? (
                <Webcam
                  className="w-full h-full object-cover"
                  mirrored={true}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/10">
                  <WebcamIcon className="h-24 w-24 text-white" />
                </div>
              )}
            </div>
            <Button
              onClick={requestWebcamPermission}
              className={cn(
                "w-full",
                webcamEnabled
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              )}
            >
              {webcamEnabled ? "Camera Active" : "Enable Camera & Microphone"}
            </Button>
          </div>
        </div>

        {/* Start Button */}
        <div className="flex justify-center pt-6">
          <Link href={`/dashboard/inteview/${params.inteviewid}/start`}>
            <Button
              size="lg"
              className={cn(
                "text-lg font-semibold px-8 py-6",
                "bg-gradient-to-r from-blue-500 to-indigo-600",
                "hover:from-indigo-600 hover:to-blue-500",
                "transform transition-all duration-200 ease-in-out",
                "hover:scale-105 hover:shadow-xl",
                "flex items-center gap-2"
              )}
            >
              Start Your Interview
              <MoveRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interview;
