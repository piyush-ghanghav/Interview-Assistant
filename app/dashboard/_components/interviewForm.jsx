// InterviewForm.jsx
"use client";

import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button } from "@/components/ui/button";
import { LoaderCircle } from 'lucide-react';
import { db } from '../../../utils/db';
import { MockInterview } from '../../../utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from "next/navigation";
import { InterviewDetailsForm } from './forms/InterviewDetailsForm';

// Initialize the Google Generative AI client
// Note: For security, consider moving this to a server-side API route.
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

function InterviewForm({ onClose }) {
    const [jobRole, setJobRole] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobExperience, setJobExperience] = useState("");
    const [projects, setProjects] = useState("");
    const [skills, setSkills] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [interviewType, setInterviewType] = useState('technical');
    const [questionFocus, setQuestionFocus] = useState([]);
    
    const { user } = useUser();
    const router = useRouter();

    // Helper function to parse AI response
    const parseAIResponse = (responseText) => {
        try {
            // First attempt: try to parse as pure JSON
            return JSON.parse(responseText);
        } catch (firstErr) {
            try {
                // Second attempt: try to remove code fences if present
                const jsonString = responseText
                    .replace(/```json\s*/g, '')
                    .replace(/```\s*/g, '')
                    .trim();
                return JSON.parse(jsonString);
            } catch (secondErr) {
                console.error("Failed to parse JSON:", secondErr);
                console.error("Response received:", responseText);
                return null;
            }
        }
    };

    // Form validation
    const validateForm = () => {
        if (!jobRole.trim()) {
            setError("Job role is required");
            return false;
        }
        if (!jobDescription.trim()) {
            setError("Job description is required");
            return false;
        }
        if (!jobExperience.trim()) {
            setError("Years of experience is required");
            return false;
        }
        if (!questionFocus.length) {
            setError("Please select at least one focus area");
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        
        try {
            setLoading(true);
            setError(null);

            // Format resume/experience details
            const formattedResume = `
                Projects: ${projects}
                Skills: ${skills}
            `;

            // Include interview type and focus areas in the prompt
            const prompt = `
                Generate exactly 10 interview questions based on:
                Role: ${jobRole}
                Description: ${jobDescription}
                Experience: ${jobExperience} years
                Resume: ${formattedResume}
                Interview Type: ${interviewType}
                Focus Areas: ${questionFocus.join(', ')}

                Please generate questions appropriate for a ${interviewType} interview,
                focusing particularly on: ${questionFocus.join(', ')}.
                
                Return the response as valid JSON with exactly 10 questions in this structure:
                {
                    "questions": [
                        {
                            "id": number,
                            "question": "Detailed question text",
                            "answer": "Comprehensive model answer that demonstrates what would be considered a strong response",
                            "category": "One of the focus areas specified",
                            "difficulty": "Easy/Medium/Hard",
                            "duration": "Expected answer duration in minutes",
                            "keywords": ["key1", "key2", "key3"],
                            "tips": "Quick tip for answering this question"
                        }
                    ]
                }

                Important requirements:
                1. Generate exactly 10 questions
                2. Each question must have all fields filled
                3. Answers should reflect ${jobExperience} years of experience level
                4. Questions should be evenly distributed across the selected focus areas
                5. Include a mix of difficulty levels
                6. Each answer should be detailed enough to serve as a comprehensive evaluation baseline
            `;

            // Create a new chat session
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const chat = model.startChat();

            // Send the message and get the response
            const result = await chat.sendMessage(prompt);
            const rawResponse = result.response.text();

            // Parse the JSON response
            const jsonResponse = parseAIResponse(rawResponse);
            
            if (jsonResponse) {
                const resp = await db.insert(MockInterview)
                    .values({
                        mockId: uuidv4(),
                        jsonMockresponse: jsonResponse,
                        jobPosition: jobRole,
                        jobDesc: jobDescription,
                        jobExp: jobExperience,
                        createdby: user?.primaryEmailAddress?.emailAddress,
                        createdat: moment().format('DD-MM-YYYY'),
                        Resume: formattedResume
                    }).returning({ mockId: MockInterview.mockId });

                if (resp && resp[0]?.mockId) {
                    onClose();
                    router.push(`/dashboard/inteview/${resp[0].mockId}`);
                } else {
                    setError("Failed to save interview data. Please try again.");
                }
            } else {
                setError("Failed to generate interview questions. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to create interview: ' + (error.message || 'Please try again.'));
        } finally {
            setLoading(false);
        }
    };

    const handleInterviewTypeChange = (value) => {
        console.log('Selected interview type:', value);
        setInterviewType(value);
    };

    const handleQuestionFocusChange = (areaId) => {
        console.log('Current focus areas:', questionFocus);
        setQuestionFocus(prev => {
            if (prev.includes(areaId)) {
                return prev.filter(id => id !== areaId);
            }
            return [...prev, areaId];
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Create Mock Interview</h2>
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            <InterviewDetailsForm
                jobRole={jobRole}
                setJobRole={setJobRole}
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
                jobExperience={jobExperience}
                setJobExperience={setJobExperience}
                projects={projects}
                setProjects={setProjects}
                skills={skills}
                setSkills={setSkills}
                interviewType={interviewType}
                onInterviewTypeChange={handleInterviewTypeChange}
                questionFocus={questionFocus}
                onQuestionFocusChange={handleQuestionFocusChange}
            />

            <div className="mt-6 flex justify-end gap-4">
                <Button
                    variant="outline"
                    onClick={onClose}
                    disabled={loading}
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-primary text-white"
                >
                    {loading ? (
                        <>
                            <LoaderCircle className="animate-spin mr-2" />
                            Generating...
                        </>
                    ) : (
                        'Create Interview'
                    )}
                </Button>
            </div>
        </div>
    );
}

export default InterviewForm;