import React, { useState } from "react";
import axios from "axios";

const CategoryForm = ({ onCategoryAdded }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/categories", { category_name: categoryName });
      setCategoryName("");
      onCategoryAdded();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Enter category name"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
