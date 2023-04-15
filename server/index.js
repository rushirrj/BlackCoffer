require("dotenv").config();

const express = require("express");
const cors = require("cors");

const apiEndPoints = require("./routes");

const connectToDatabase = require("./connection");
const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api",apiEndPoints)

app.listen(
  port,
  async () =>
    await connectToDatabase().then(() => {
      console.log(`mongodb connected`);
      console.log(`Server is running on port ${port}`);
    })
);
