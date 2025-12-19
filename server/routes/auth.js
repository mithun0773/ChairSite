const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { sendVerificationEmail } = require("../utils/mailer");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ msg: "Email exists" });
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, passwordHash: hash });

  // create token for verification
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  await sendVerificationEmail(email, token);

  res.json({ msg: "Signup success. Check email to verify." });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(400).json({ msg: "Invalid credentials" });
  
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({ token, user: { name: user.name, email: user.email } });
});

router.get("/verify/:token", async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
    await User.findByIdAndUpdate(decoded.id, { isVerified: true });
    res.send("Email verified – you can close this tab.");
  } catch (err) {
    res.status(400).send("Invalid token");
  }
});

module.exports = router;
