import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
    console.log(`The server is listening on http://localhost:${PORT}`)
);
