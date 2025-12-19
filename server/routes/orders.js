const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const Order = require("../models/Order");

// Create PaymentIntent + Create Order (simplified)
router.post("/create-payment-intent", async (req, res) => {
  const { items, customerEmail } = req.body;
  // compute total server-side based on product IDs (omitted here for brevity)
  const total = items.reduce((s, it) => s + it.price * it.quantity, 0);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total * 100),
    currency: "inr",
    receipt_email: customerEmail,
  });

  // create order with paymentIntent id, mark pending
  const order = await Order.create({
    user: req.user?.id || null,
    items,
    totalAmount: total,
    paymentStatus: "pending",
    paymentIntentId: paymentIntent.id,
  });

  res.json({ clientSecret: paymentIntent.client_secret, orderId: order._id });
});

// webhook route recommended for finalizing after Stripe not inlined here
module.exports = router;
