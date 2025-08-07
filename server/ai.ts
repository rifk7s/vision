"use server";

import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const getAiResult = async (prompt: string, file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const result = await generateText({
    model: google("gemini-2.5-flash"),
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
          {
            type: "file",
            data: buffer,
            mediaType: file.type,
          },
        ],
      },
    ],
  });

  return result.steps[0].text;
};
