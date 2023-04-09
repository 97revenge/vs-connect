const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 3001;

const apiFilePath = path.join(__dirname, "data", "uiAPI.json");
const apiReadFile = fs.readFileSync(apiFilePath, "utf-8");

app.get("/api", (req, res) => apiReadFile && res.json(apiReadFile));

app.listen(port, () => {
  console.log("running");
});
