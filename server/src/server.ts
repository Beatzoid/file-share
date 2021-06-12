require("dotenv").config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db";
connectDB();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
    console.log(`The server is listening on http://localhost:${PORT}`)
);
