import db from "../config/db.js";

// Get all categories (from Master table)
export const getAllCategories = async (req, res) => {
  try {
    const [categories] = await db.query("SELECT * FROM Master");
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Error fetching categories." });
  }
};

// Create a new category (insert into Master table)
export const createCategory = async (req, res) => {
  const { category_name } = req.body;
  if (!category_name) {
    return res.status(400).json({ error: "Category name is required." });
  }
  try {
    const [result] = await db.query(
      "INSERT INTO Master (category_name) VALUES (?)",
      [category_name]
    );
    res.status(201).json({ message: "Category created successfully.", id: result.insertId });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Error creating category." });
  }
};
