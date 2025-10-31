import Product from "../models/Product.js";

// Get all products
export async function listProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Seed sample products
export async function seedProducts(_req, res) {
  try {
    const count = await Product.countDocuments();
    if (count > 0) return res.json({ message: "Already seeded" });

    const sample = [
      {
        title: "Eco Cotton T-Shirt",
        price: 499,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        description: "Soft, organic cotton tee — breathable and eco-friendly.",
      },
      {
        title: "Reusable Water Bottle",
        price: 299,
        image: "https://images.unsplash.com/photo-1526401281623-359dfb0b42c8?w=500",
        description: "Stainless steel bottle — keeps your drinks cool longer.",
      },
      {
        title: "Bamboo Toothbrush Set",
        price: 199,
        image: "https://images.unsplash.com/photo-1606813902775-dbbbe9b44752?w=500",
        description: "Pack of 2 bamboo toothbrushes — zero plastic, biodegradable.",
      },
      {
        title: "Recycled Canvas Tote Bag",
        price: 249,
        image: "https://images.unsplash.com/photo-1606813898853-199a29f64d49?w=500",
        description: "Durable tote bag made from 100% recycled fabrics.",
      },
      {
        title: "Wooden Sunglasses",
        price: 899,
        image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
        description: "Stylish wooden frame sunglasses — lightweight and unique.",
      },
      {
        title: "Solar Powered Lamp",
        price: 1299,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
        description: "Portable solar lamp ideal for camping and emergency use.",
      },
      {
        title: "Compostable Phone Case",
        price: 699,
        image: "https://images.unsplash.com/photo-1606813898853-199a29f64d49?w=500",
        description: "Eco-friendly phone case made of compostable bioplastics.",
      },
      {
        title: "Eco-Friendly Notebook",
        price: 149,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500",
        description: "Recycled paper notebook — stylish and sustainable.",
      },
      {
        title: "Organic Cotton Hoodie",
        price: 1299,
        image: "https://images.unsplash.com/photo-1520962916861-e8a42d1f0d1d?w=500",
        description: "Super-soft hoodie made with 100% organic cotton.",
      },
      {
        title: "Bamboo Sunglasses Case",
        price: 299,
        image: "https://images.unsplash.com/photo-1596464716126-bd0f1bdf9e61?w=500",
        description: "Protect your eyewear in this eco-friendly bamboo case.",
      },
      {
        title: "Stainless Steel Straw Set",
        price: 149,
        image: "https://images.unsplash.com/photo-1567303318740-83b8c07d6a6e?w=500",
        description: "Set of 3 reusable straws + cleaner brush — ditch plastic!",
      },
      {
        title: "Hemp Backpack",
        price: 1599,
        image: "https://images.unsplash.com/photo-1606813898853-199a29f64d49?w=500",
        description: "Strong and sustainable backpack made from hemp fabric.",
      },
      {
        title: "Plant-Based Soap Bar",
        price: 99,
        image: "https://images.unsplash.com/photo-1629198735667-5a12f3b2c1a8?w=500",
        description: "Natural handmade soap with coconut oil and aloe vera.",
      },
      {
        title: "Coconut Bowl Set",
        price: 349,
        image: "https://images.unsplash.com/photo-1601042920458-0c3e4d1f3cfb?w=500",
        description: "Set of 2 coconut shell bowls — perfect for smoothie lovers.",
      },
      {
        title: "Bamboo Cutlery Set",
        price: 199,
        image: "https://images.unsplash.com/photo-1606813902775-dbbbe9b44752?w=500",
        description: "Reusable cutlery set with spoon, fork, knife, and pouch.",
      },
      {
        title: "Recycled Paper Gift Wrap",
        price: 79,
        image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
        description: "Eco gift wrap pack made from recycled paper.",
      },
      {
        title: "Organic Cotton Cap",
        price: 399,
        image: "https://images.unsplash.com/photo-1596464716126-bd0f1bdf9e61?w=500",
        description: "Lightweight and breathable cap made with organic cotton.",
      },
      {
        title: "Biodegradable Plant Pots",
        price: 249,
        image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=500",
        description: "Set of 4 biodegradable pots — grow your plants responsibly.",
      },
      {
        title: "Eco Yoga Mat",
        price: 999,
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07a?w=500",
        description: "Non-slip yoga mat made from sustainable cork and rubber.",
      },
      {
        title: "Recycled Denim Wallet",
        price: 499,
        image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=500",
        description: "Durable and stylish wallet crafted from recycled denim.",
      },
    ];

    await Product.insertMany(sample);
    res.json({ inserted: sample.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
