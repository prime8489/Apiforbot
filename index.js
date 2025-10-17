// Simple Express API
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Main route
app.get("/", (req, res) => {
  const { name, username, number, email } = req.query;

  if (!name || !username || !number || !email) {
    return res.json({
      success: false,
      message: "Please provide name, username, number, and email in query",
      example: "/?name=Rehan&username=prime&number=9999999999&email=rehan@gmail.com"
    });
  }

  // ✅ Send user info
  res.json({
    success: true,
    message: "User data received successfully ✅",
    data: {
      name,
      username,
      number,
      email
    }
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ API is live now on port ${PORT}`);
});
