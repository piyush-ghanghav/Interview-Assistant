import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

// const safetySettings = {
//     harmCategory: HarmCategory.HARM_CATEGORY_NONE,
//     harmBlockThreshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_NONE,
// };

const generationConfig = {
    temperature: 0.9,
    topP: 0.95,
    maxOutputTokens: 2048, // Increased for longer responses
    responseMimeType: "text/plain",
};

export interface ResumeAnalysis {
    skillMatch: number;
    relevantExperience: {
        matches: string[];
        gaps: string[];
    };
    missingSkills: string[];
    suggestions: string[];
    overallFeedback: string;
}

// Function to process resume and job description
export async function processFileWithGemini(resumeText: string, jobDescription: string): Promise<ResumeAnalysis> {
    try {
        const chat = model.startChat({
            generationConfig,
        });

        const prompt = `
        You are an experienced technical recruiter analyzing resumes for software development positions.
        
        Job Description:
        ${jobDescription}

        Candidate's Resume:
        ${resumeText}

        Provide a detailed technical analysis following these criteria:
        1. Required Skills Assessment:
           - Evaluate each required skill listed in the job description
           - Assign percentage match based on candidate's experience
           - Consider both direct matches and related technologies

        2. Experience Analysis:
           - Compare years of experience requirement
           - Evaluate quality of experience in similar roles
           - Assess project complexity and relevance

        3. Technical Gap Analysis:
           - Identify missing critical skills
           - Evaluate depth of knowledge in required areas
           - Note any outdated or irrelevant technologies

        4. Improvement Recommendations:
           - Suggest specific certifications or training
           - Recommend projects to gain missing experience
           - Provide actionable steps for skill development

        Return the analysis in this JSON structure:
        {
            "skillMatch": number (0-100),
            "relevantExperience": {
                "matches": string[],
                "gaps": string[]
            },
            "missingSkills": string[],
            "suggestions": string[],
            "overallFeedback": string
        }

        Focus on technical accuracy and provide specific, actionable feedback.`;

        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        const text = response.text();

        try {
            const parsedResponse = JSON.parse(text);
            return {
                skillMatch: Number(parsedResponse.skillMatch) || 0,
                relevantExperience: {
                    matches: Array.isArray(parsedResponse.relevantExperience?.matches) 
                        ? parsedResponse.relevantExperience.matches 
                        : [],
                    gaps: Array.isArray(parsedResponse.relevantExperience?.gaps) 
                        ? parsedResponse.relevantExperience.gaps 
                        : []
                },
                missingSkills: Array.isArray(parsedResponse.missingSkills) 
                    ? parsedResponse.missingSkills 
                    : [],
                suggestions: Array.isArray(parsedResponse.suggestions) 
                    ? parsedResponse.suggestions 
                    : [],
                overallFeedback: parsedResponse.overallFeedback || ''
            };
        } catch (e) {
            console.error("Failed to parse Gemini response:", e);
            return {
                skillMatch: 0,
                relevantExperience: { matches: [], gaps: [] },
                missingSkills: [],
                suggestions: [],
                overallFeedback: "Failed to analyze resume. Please try again."
            };
        }
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error('Failed to analyze resume. Please try again.');
    }
}

// Future Use Components - Resume Upload functionality
// const { GoogleAIFileManager } = require("@google/generative-ai/server");
// const fileManager = new GoogleAIFileManager(apiKey);

// async function uploadToGemini(path, mimeType) {
//     const uploadResult = await fileManager.uploadFile(path, {
//         mimeType,
//         displayName: path,
//     });
//     const file = uploadResult.file;
//     console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
//     return file;
// }

// // Example Message Send (Can be modified as needed)
// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());

