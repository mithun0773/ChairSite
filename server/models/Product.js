const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    category: { type: String, required: true },
    description: { type: String },
    basePrice: { type: Number, required: true },
    images: [String],
    options: {
      colors: [String],
      materials: [String],
      addOns: [
        {
          key: String,
          price: Number,
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
