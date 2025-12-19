require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const MONGO_URI = process.env.MONGO_URI;

const categories = [
  { name: "chairs", prefix: "chair", price: 3500 },
  { name: "sofas", prefix: "sofa", price: 15000 },
  { name: "tables", prefix: "table", price: 7000 },
  { name: "beds", prefix: "bed", price: 18000 },
  { name: "cabinets", prefix: "cabinet", price: 6000 },
  { name: "wardrobes", prefix: "wardrobe", price: 12000 },
  { name: "decor", prefix: "decor", price: 2500 },
  { name: "outdoor", prefix: "outdoor", price: 5000 },
];

const colors = ["Black", "White", "Brown", "Grey"];
const materials = ["Wood", "Steel", "Plastic", "Premium Wood"];

const generateProducts = () => {
  let products = [];

  categories.forEach((cat) => {
    for (let i = 1; i <= 10; i++) {
      products.push({
        title: `${cat.prefix.toUpperCase()} Model ${i}`,
        slug: `${cat.prefix}-model-${i}`,
        category: cat.name,
        description: `High quality ${cat.name.slice(
          0,
          -1
        )} designed for comfort and durability.`,
        basePrice: cat.price + i * 100,
        images: [`/Images/${cat.prefix}${i}.png`],
        options: {
          colors,
          materials,
          addOns: [
            { key: "Premium Finish", price: 500 },
            { key: "Extra Cushioning", price: 800 },
            { key: "Extended Warranty", price: 1200 },
          ],
        },
      });
    }
  });

  return products;
};

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected!");

    await Product.deleteMany();
    console.log("Old products removed.");

    const products = generateProducts();
    await Product.insertMany(products);

    console.log("70 Products Inserted Successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
