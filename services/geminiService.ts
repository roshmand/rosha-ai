
import { GoogleGenAI, Modality } from "@google/genai";
import { AdType, AdStyle } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

function createPrompt(adType: AdType, adStyle: AdStyle): string {
  let prompt = 'Create a professional, high-quality advertisement image. ';
  prompt += 'The product is provided in the image. Automatically remove the background of the product and place it in a new, realistic scene. ';

  switch (adStyle) {
    case AdStyle.Instagram:
      prompt += 'The style should be a vibrant, eye-catching Instagram ad, suitable for a social media feed. Use bright, modern aesthetics. Aspect ratio should be 1:1 (square) or 4:5 (portrait).';
      break;
    case AdStyle.StoreBanner:
      prompt += 'The style should be a clean, minimalist e-commerce store banner, perfect for a website hero section. The background should be simple, often a solid color or a subtle gradient. ';
      break;
    case AdStyle.NaturalBackground:
      prompt += 'The style should feature a natural, realistic background that complements the product. For example, a skincare product might be on a marble countertop with plants, or a sneaker on a clean city street. ';
      break;
  }

  switch (adType) {
    case AdType.WithMaleModel:
      prompt += ' Include a male model interacting naturally with the product. The model should look professional and fit the product category.';
      break;
    case AdType.WithFemaleModel:
      prompt += ' Include a female model interacting naturally with the product. The model should look professional and fit the product category.';
      break;
    case AdType.ProductOnly:
      prompt += ' The image should feature the product only, with no people. Focus on creating a beautiful product shot.';
      break;
  }
  
  prompt += ' The final image must be photorealistic and of commercial quality.'

  return prompt;
}

export const generateAdImage = async (
  base64Image: string,
  mimeType: string,
  adType: AdType,
  adStyle: AdStyle
): Promise<string> => {
  const prompt = createPrompt(adType, adStyle);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    const firstPart = response.candidates?.[0]?.content?.parts?.[0];
    if (firstPart && firstPart.inlineData) {
      return firstPart.inlineData.data;
    } else {
      throw new Error("No image data found in the API response.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate image with Gemini API.");
  }
};
