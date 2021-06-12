require("dotenv").config();

import express from "express";
import cors from "cors";

// Routes
import fileRouter from "./routes/fileRouter";

import connectDB from "./config/db";
connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/files", fileRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
);
