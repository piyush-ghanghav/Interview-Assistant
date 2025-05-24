"use client";

import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface ComparisonResultProps {
  result: {
    skillMatch: number;
    missingSkills: string[];
    suggestions: string[];
    relevantExperience: {
      matches: string[];
      gaps: string[];
    };
    overallFeedback: string;
  };
}

export function ComparisonResult({ result }: ComparisonResultProps) {
  return (
    <div className="space-y-6">
      {/* Match Score */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Match Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Progress value={result.skillMatch} className="w-full" />
            <span className="text-2xl font-bold">{result.skillMatch}%</span>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis */}
      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="improvements">Improvements</TabsTrigger>
          <TabsTrigger value="feedback">Overall Feedback</TabsTrigger>
        </TabsList>

        {/* Skills Analysis */}
        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2 text-red-600 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Missing Critical Skills
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {result.missingSkills.map((skill, index) => (
                      <li key={index} className="text-gray-600">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experience Analysis */}
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Experience Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2 text-green-600 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Matching Experience
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {result.relevantExperience.matches.map((match, index) => (
                      <li key={index} className="text-gray-600">
                        {match}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-amber-600 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Experience Gaps
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {result.relevantExperience.gaps.map((gap, index) => (
                      <li key={index} className="text-gray-600">
                        {gap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Improvement Suggestions */}
        <TabsContent value="improvements">
          <Card>
            <CardHeader>
              <CardTitle>Suggested Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-blue-500 font-bold">•</span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Overall Feedback */}
        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle>Overall Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 whitespace-pre-wrap">
                {result.overallFeedback}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}