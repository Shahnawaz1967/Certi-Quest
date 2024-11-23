import express from "express";
import dotenv from "dotenv";
import masterRoutes from "./routes/masterRoutes.js";
import detailRoutes from "./routes/detailRoutes.js";
import db from "./config/db.js";

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Test Database Connection
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("Connected to MySQL database successfully!");
    connection.release(); // Release connection after testing
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Stop the server if the connection fails
  }
})();

// Routes
app.use("/api/categories", masterRoutes); // For category routes
app.use("/api/certificates", detailRoutes); // For certificate routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
