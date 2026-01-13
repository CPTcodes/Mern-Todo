import express from "express";
import notesRoute from "./routes/notesRoute.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import rateLimiting from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(rateLimiting);

app.use("/api/notes", notesRoute);

connectDb().then(() => {
  app.listen(5001, () => {
    console.log("runnung on port ", port);
  });
});
