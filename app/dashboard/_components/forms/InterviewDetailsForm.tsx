"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

// Define constant arrays at the top level
const interviewTypes = [
    { id: 'technical', label: 'Technical' },
    { id: 'managerial', label: 'Managerial' },
    { id: 'behavioral', label: 'Behavioral' },
    { id: 'hr', label: 'HR' }
];

const focusAreas = [
    { id: 'problemSolving', label: 'Problem Solving' },
    { id: 'systemDesign', label: 'System Design' },
    { id: 'coding', label: 'Coding' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'communication', label: 'Communication' },
    { id: 'projectManagement', label: 'Project Management' }
];

interface InterviewDetailsFormProps {
    jobRole: string;
    jobDescription: string;
    jobExperience: string;
    projects: string;
    skills: string;
    interviewType: string;
    questionFocus: string[];
    loading: boolean;
    onJobRoleChange: (value: string) => void;
    onJobDescriptionChange: (value: string) => void;
    onJobExperienceChange: (value: string) => void;
    onProjectsChange: (value: string) => void;
    onSkillsChange: (value: string) => void;
    onInterviewTypeChange: (value: string) => void;
    onQuestionFocusChange: (areaId: string) => void;
    onSubmit: () => void;
}

export function InterviewDetailsForm({
    jobRole,
    jobDescription,
    jobExperience,
    projects,
    skills,
    interviewType,
    questionFocus,
    loading,
    onJobRoleChange,
    onJobDescriptionChange,
    onJobExperienceChange,
    onProjectsChange,
    onSkillsChange,
    onInterviewTypeChange,
    onQuestionFocusChange,
    onSubmit
}: InterviewDetailsFormProps) {
    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Type changed to:', e.target.value);
        onInterviewTypeChange(e.target.value);
    };

    const handleFocusChange = (areaId: string) => {
        console.log('Focus area clicked:', areaId);
        onQuestionFocusChange(areaId);
    };

    // Update the input handlers to handle ChangeEvent properly
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        handler: (value: string) => void
    ) => {
        handler(e.target.value);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg">
            <div className="border-b px-6 py-4">
                <h2 className="text-2xl font-bold text-gray-900">Create Your Interview</h2>
                <p className="text-sm text-gray-500 mt-1">Fill in the details below to generate your interview questions</p>
            </div>

            <form className="p-6 space-y-8">
                {/* Basic Information Section */}
                <div className="rounded-lg border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                    <div className="space-y-4">
                        {/* Job Role */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Job Role</label>
                            <Input
                                placeholder="Ex. Full Stack Developer"
                                required
                                value={jobRole}
                                onChange={(e) => handleInputChange(e, onJobRoleChange)}
                                name="jobRole"
                                className="h-11"
                            />
                        </div>

                        {/* Job Description / Tech Stack */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Job Description</label>
                            <Textarea
                                placeholder="Describe the role and required technologies..."
                                required
                                value={jobDescription}
                                onChange={(e) => handleInputChange(e, onJobDescriptionChange)}
                                className="min-h-[100px]"
                            />
                        </div>

                        {/* Experience */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Experience</label>
                            <Input
                                placeholder="Ex. 1, 2, 4 years"
                                required
                                value={jobExperience}
                                onChange={(e) => handleInputChange(e, onJobExperienceChange)}
                                name="experience"
                                className="h-11"
                            />
                        </div>
                    </div>
                </div>

                {/* Skills & Projects Section */}
                <div className="rounded-lg border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience Details</h3>
                    <div className="space-y-4">
                        {/* Projects */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Projects</label>
                            <Textarea
                                placeholder="List your key projects and responsibilities..."
                                required
                                value={projects}
                                onChange={(e) => onProjectsChange(e.target.value)}
                                className="min-h-[120px]"
                            />
                        </div>

                        {/* Skills */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Skills</label>
                            <Textarea
                                placeholder="Enter your technical and soft skills..."
                                required
                                value={skills}
                                onChange={(e) => onSkillsChange(e.target.value)}
                                className="min-h-[100px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Interview Preferences */}
                <div className="rounded-lg border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Preferences</h3>
                    
                    {/* Interview Type */}
                    <div className="space-y-4">
                        <label className="text-sm font-medium text-gray-700">Interview Type</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {interviewTypes.map((type) => (
                                <label
                                    key={type.id}
                                    className={cn(
                                        "relative flex items-center justify-center p-4 rounded-lg border-2",
                                        "cursor-pointer transition-all hover:border-blue-500",
                                        interviewType === type.id 
                                            ? "border-blue-500 bg-blue-50" 
                                            : "border-gray-200"
                                    )}
                                >
                                    <input
                                        type="radio"
                                        name="interviewType"
                                        value={type.id}
                                        checked={interviewType === type.id}
                                        onChange={handleTypeChange}
                                        className="sr-only"
                                    />
                                    <span className="text-sm font-medium">{type.label}</span>
                                </label>
                            ))}
                        </div>

                        {/* Focus Areas */}
                        <div className="space-y-3 mt-6">
                            <label className="text-sm font-medium text-gray-700">
                                Focus Areas <span className="text-gray-400">(Select up to 3)</span>
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {focusAreas.map((area) => (
                                    <label
                                        key={area.id}
                                        className={cn(
                                            "flex items-center gap-3 p-3 rounded-lg border",
                                            "hover:border-blue-500 hover:bg-blue-50 transition-all",
                                            "cursor-pointer",
                                            questionFocus.includes(area.id) && "border-blue-500 bg-blue-50"
                                        )}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={questionFocus.includes(area.id)}
                                            onChange={() => handleFocusChange(area.id)}
                                            className="h-4 w-4 rounded border-gray-300 text-blue-600"
                                        />
                                        <span className="text-sm">{area.label}</span>
                                    </label>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500">
                                {questionFocus.length}/3 areas selected
                            </p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="button"
                    onClick={onSubmit}
                    disabled={loading}
                    className={cn(
                        "w-full py-3",
                        "bg-gradient-to-r from-blue-600 to-blue-700",
                        "text-white font-semibold text-lg",
                        "rounded-lg shadow-md",
                        "hover:shadow-lg transition-all duration-200",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "flex items-center justify-center gap-2"
                    )}
                >
                    {loading ? (
                        <>
                            <LoaderCircle className="h-5 w-5 animate-spin" />
                            <span>Creating Your Interview...</span>
                        </>
                    ) : (
                        'Generate Interview Questions'
                    )}
                </Button>
            </form>
        </div>
    );
}