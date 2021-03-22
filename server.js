const express = require("express");
const dotenv = require("dotenv");

// Load our enviroment variables from the config.env (process.env)
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000; // what ever is in the enviroment variable PORT or 5000

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
