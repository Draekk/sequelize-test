const express = require("express");
const path = require("path");
const router = require("./routes/userRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/user", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000...");
});
