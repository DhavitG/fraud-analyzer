require("dotenv").config();
const express = require("express");
const app = express();

// connect DB
const connectDB = require("./db/connect");

// importing routers
const riskRouter = require("./routes/risk");
const reportRouter = require("./routes/report");

// middleware
app.use(express.json());

// routes
app.use("/api/risk", riskRouter);
app.use("/api/report", reportRouter);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running at port ${port}... `));
  } catch (e) {
    console.log(e);
  }
};

start();
