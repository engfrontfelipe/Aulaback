require("dotenv").config();

const http = require("http");
const { neon } = require("@neondatabase/serverless");

export const sql = neon(process.env.DATABASE_URL);
