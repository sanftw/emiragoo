const express = require("express");
const router = express.Router();
const admin = require("../firebase");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password });
    res.status(201).json({ message: "User registered", uid: user.uid });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  res.status(501).json({ message: "Client-side handles login via Firebase Auth SDK." });
});

module.exports = router;
