const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const safetySettings = {
    harmCategory: HarmCategory.HARM_CATEGORY_NONE,
    harmBlockThreshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_NONE,
}

const generationConfig = {
    temperature: 0.9,
    topP: 0.95,
    maxOutputTokens: 1024,
    responseMimeType: "text/plain",
};

// Active Chat Session Configuration
export const chatSession = model.startChat({
    generationConfig,
    safetySettings,
});

// Future Use Components - Resume Upload functionality
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const fileManager = new GoogleAIFileManager(apiKey);

async function uploadToGemini(path, mimeType) {
    const uploadResult = await fileManager.uploadFile(path, {
        mimeType,
        displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
}

// // Example Message Send (Can be modified as needed)
// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());

