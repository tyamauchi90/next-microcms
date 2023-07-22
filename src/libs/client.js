// import dotenv from "dotenv";
// dotenv.config();

import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: "next-microcms-0722",
  apiKey: process.env.API_KEY,
})