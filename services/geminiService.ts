
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the "SR Digital AI Lead Strategist". 
SR Digital is a premium digital marketing agency for realtors in Delhi NCR (Delhi, Noida, Gurgaon, Ghaziabad, Faridabad).
Your goal is to provide expert advice on real estate lead generation.

Key Offerings of SR Digital:
1. High-intent targeting (budget filters, location signals).
2. Call + WhatsApp funnels for immediate conversion.
3. Google Search/Display/YouTube and Meta (FB/Insta) ads.
4. Premium creatives (society walkthroughs, location hooks).
5. Fast setup (7-14 days for leads).

Guidelines:
- Be professional, expert, and encouraging.
- Focus on Delhi NCR context.
- Keep responses concise (max 2-3 sentences per point).
- Always suggest that a human audit from SR Digital is the next best step.
- Mention that site visits are the ultimate metric.
`;

export const getLeadStrategyAdvice = async (history: ChatMessage[], message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us directly at +91 9211841593 for immediate assistance!";
  }
};
