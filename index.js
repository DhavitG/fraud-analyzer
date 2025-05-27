require("dotenv").config();
const express = require("express");
const app = express();

// importing routers
const riskRouter = require("./routes/risk");
const reportRouter = require("./routes/report");

// middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ msg: "hi" });
});
app.use("/api/risk", riskRouter);
app.use("/api/report", reportRouter);

const port = process.env.PORT || 3001;

app.listen(port, console.log(`Server is running at port ${port}...`));
