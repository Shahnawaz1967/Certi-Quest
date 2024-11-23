import db from "../config/db.js";

const Master = {
  // Get all categories
  async getAll() {
    const [rows] = await db.query("SELECT * FROM categories");
    return rows;
  },

  // Create a new category
  async create(category_name) {
    const [result] = await db.query(
      "INSERT INTO categories (category_name) VALUES (?)",
      [category_name]
    );
    return { id: result.insertId, category_name };
  },
};

export default Master;
