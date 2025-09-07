const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001; // <- CRITICAL: Use Render's port or default to 3001

app.use(cors());
app.use(express.json());

// ... your other code (routes, etc.) ...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
