const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 JaiBo backend is running perfectly!");
});

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
