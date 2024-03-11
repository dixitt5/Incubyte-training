// const { DynamicStructuredTool } = require("langchain/tools");
// const { z } = require("zod");
// const axios = require("axios");
// require("dotenv").config();
// const { initializeAgentExecutorWithOptions } = require("langchain/agents");
// const { ChatOpenAI } = require("langchain/chat_models/openai");

// const promptTools = [
//   new DynamicStructuredTool({
//     name: "returns the output in markdown format!",
//     func: async (userMessage) => {
//       const userMessageSchema = z.object({
//         prompt: z.string(),
//       });
//       const validatedInputs = await userMessageSchema.parseAsync(
//         userMessage
//       );
//       return userMessage;

//     },
//     schema: z.object({
//       limit: z.string(),
//     }),
//     description:
//       `##Instruction##
//       Your task is to ensure that the output you generate is formatted exclusively in Markdown. This means every element of your response, whether it involves text formatting, links, images, or code blocks, must adhere to Markdown syntax rules. Remember, the clarity and readability of your response depend heavily on proper Markdown formatting, so pay close attention to how you structure headings, lists, emphasis, and other elements. Your adherence to these formatting guidelines is crucial for maintaining the consistency and professionalism of the output.`
//   })];

// const chat = new ChatOpenAI({
//   temperature: 0,
// });

// const prefix =
//   "You are a helpful AI assistant. Provide user whatever He/She needs.";

// async function chatCompletion(message) {
//   const executor = await initializeAgentExecutorWithOptions(promptTools, chat, {
//     agentType: "openai-functions",
//     verbose: true,
//     agentArgs: {
//       prefix,
//     },
//   });

//   const result = await executor.run(`${message}`);

//   return result;
// }

// console.log(chatCompletion("what are the top 5 things to try in Ahmedabad?"));



import { z } from "zod";
import { OpenAI } from "@langchain/openai";
import { RunnableSequence } from "@langchain/core/runnables";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";
dotenv.config();

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    answer: z.string().describe("answer to the user's question strictly in markdown format!"),
  })
);

const chain = RunnableSequence.from([
  PromptTemplate.fromTemplate(
    " Your task is to ensure that the output you generate is formatted exclusively in Markdown. This means every element of your response, whether it involves text formatting, links, images, or code blocks, must adhere to Markdown syntax rules. Remember, the clarity and readability of your response depend heavily on proper Markdown formatting, so pay close attention to how you structure headings, lists, emphasis, and other elements. Your adherence to these formatting guidelines is crucial for maintaining the consistency and professionalism of the output.\n{format_instructions}\n{question}"
  ),
  new OpenAI({ temperature: 0,  openAIApiKey: process.env.OPENAI_API_KEY }),
  parser,
]);

console.log(parser.getFormatInstructions());

const response = await chain.invoke({
  question: "what are the top 5 things to try in Ahmedabad?",
  format_instructions: parser.getFormatInstructions(),
});

console.log(response);
