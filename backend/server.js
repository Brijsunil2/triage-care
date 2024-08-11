import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: './backend/.env' });
import cors from "cors";

import { getPgVersion, initDBTables } from "./config/dbConfig.js";
import checkInRoutes from "./routes/checkInRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;
getPgVersion();
initDBTables();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/triage/checkin", checkInRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Welcome to the Triage Care Server!"));
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
