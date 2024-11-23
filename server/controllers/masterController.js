import Master from "../models/MasterModel.js";

// Fetch all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Master.getAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories", error });
  }
};

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { category_name } = req.body;
    const category = await Master.create(category_name);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Failed to create category", error });
  }
};
