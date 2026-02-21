require("./src/db/connect"); // just require it

const { Product } = require("./src/models/schema");

const products = [
  // 🍎 Fruits
  {
    productname: "Apple",
    description: "Fresh red apples",
    price: 120,
    image: "assets/images/apple.jpg",
    category: "Fruits",
    countInStock: 50,
    rating: 4,
  },
  {
    productname: "Banana",
    description: "Organic bananas",
    price: 60,
    image: "assets/images/banana.jpg",
    category: "Fruits",
    countInStock: 40,
    rating: 5,
  },
  {
    productname: "Mango",
    description: "Sweet mangoes",
    price: 150,
    image: "assets/images/mango.jpg",
    category: "Fruits",
    countInStock: 30,
    rating: 5,
  },
  {
    productname: "Grapes",
    description: "Green seedless grapes",
    price: 90,
    image: "assets/images/grapes.jpg",
    category: "Fruits",
    countInStock: 45,
    rating: 4,
  },

  // 🥕 Vegetables
  {
    productname: "Carrot",
    description: "Fresh carrots",
    price: 45,
    image: "assets/images/carrot.jpg",
    category: "Vegetables",
    countInStock: 35,
    rating: 4,
  },
  {
    productname: "Tomato",
    description: "Farm fresh tomatoes",
    price: 30,
    image: "assets/images/tomato.jpg",
    category: "Vegetables",
    countInStock: 60,
    rating: 4,
  },
  {
    productname: "Potato",
    description: "Organic potatoes",
    price: 25,
    image: "assets/images/potato.jpg",
    category: "Vegetables",
    countInStock: 70,
    rating: 4,
  },
  {
    productname: "Onion",
    description: "Fresh onions",
    price: 35,
    image: "assets/images/onion.jpg",
    category: "Vegetables",
    countInStock: 65,
    rating: 4,
  },

  // 🥛 Dairy
  {
    productname: "Milk 1L",
    description: "Pure cow milk",
    price: 55,
    image: "assets/images/milk.jpg",
    category: "Dairy",
    countInStock: 100,
    rating: 5,
  },
  {
    productname: "Cheese",
    description: "Cheddar cheese block",
    price: 250,
    image: "assets/images/cheese.jpg",
    category: "Dairy",
    countInStock: 25,
    rating: 4,
  },
  {
    productname: "Butter",
    description: "Salted butter",
    price: 80,
    image: "assets/images/butter.jpg",
    category: "Dairy",
    countInStock: 40,
    rating: 4,
  },

  // 🥤 Beverages
  {
    productname: "Orange Juice",
    description: "Fresh orange juice",
    price: 90,
    image: "assets/images/juice.jpg",
    category: "Beverages",
    countInStock: 45,
    rating: 4,
  },
  {
    productname: "Coca Cola",
    description: "Cold drink 750ml",
    price: 40,
    image: "assets/images/cola.jpg",
    category: "Beverages",
    countInStock: 80,
    rating: 4,
  },
  {
    productname: "Green Tea",
    description: "Healthy green tea",
    price: 120,
    image: "assets/images/tea.jpg",
    category: "Beverages",
    countInStock: 50,
    rating: 5,
  },

  // 🍪 Snacks
  {
    productname: "Potato Chips",
    description: "Spicy chips",
    price: 20,
    image: "assets/images/chips.jpg",
    category: "Snacks",
    countInStock: 120,
    rating: 4,
  },
  {
    productname: "Biscuits",
    description: "Chocolate biscuits",
    price: 35,
    image: "assets/images/biscuits.jpg",
    category: "Snacks",
    countInStock: 75,
    rating: 5,
  },
  {
    productname: "Popcorn",
    description: "Butter popcorn",
    price: 50,
    image: "assets/images/popcorn.jpg",
    category: "Snacks",
    countInStock: 90,
    rating: 4,
  }
];

const seedData = async () => {
  try {
    await Product.deleteMany();
    console.log("Old products deleted");

    await Product.insertMany(products);
    console.log("Products inserted successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();