import React, { useState } from "react";
import axios from "axios";

const CategoryForm = ({ onCategoryAdded }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/categories", {
        category_name: categoryName,
      });
      setCategoryName(""); // Clear input after submitting
      onCategoryAdded(); // Refresh category list after adding
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
        className="p-2 border border-gray-300 rounded-md"
        required
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded-md">
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
