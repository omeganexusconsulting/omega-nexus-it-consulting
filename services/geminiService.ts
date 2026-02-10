
import { GoogleGenAI } from "@google/genai";

/* Guideline: API client must be initialized using a named parameter with process.env.API_KEY directly. */

export const processContactInquiry = async (data: { name: string; message: string; email: string }) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, professional, and friendly acknowledgment email for an IT consulting firm called "Omega Nexus IT Consulting Services". 
      The client name is ${data.name}. 
      Their message was: "${data.message}". 
      Respond as if you are the Managing Director, thanking them and mentioning our expertise in high-end cloud and security solutions. Keep it under 100 words.`,
    });
    /* Guideline: Access text directly via the .text property of GenerateContentResponse. */
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Thank you for contacting Omega Nexus. We have received your inquiry and a senior consultant will reach out to you within 24 hours.";
  }
};

export const processJobApplication = async (data: { name: string; jobTitle: string; coverLetter: string }) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `A candidate named ${data.name} just applied for the ${data.jobTitle} position at Omega Nexus IT Consulting Services. 
      Their cover letter snippet: "${data.coverLetter}". 
      Generate a warm 'Application Received' message. 
      Encourage them about joining an elite team. Keep it professional.`,
    });
    /* Guideline: Access text directly via the .text property of GenerateContentResponse. */
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Your application to Omega Nexus has been successfully submitted. Our recruitment team will review your qualifications shortly.";
  }
};
