import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import gameRoutes from "./routes/games.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/games", gameRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Backend running 🚀" });
});

// Render will inject PORT automatically
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
