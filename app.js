require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const router = require("./routes/userRoutes");
const { authenticate } = require("./middlewares/validationMiddleware");
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/user", router);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/protected", authenticate, (req, res) => {
  res.redirect("/templates/index3.html");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
