import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryForm from "../components/CategoryForm.jsx";
import CategoryList from "../components/CategoryList.jsx";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <CategoryForm onCategoryAdded={fetchCategories} />
      <CategoryList categories={categories} />
    </div>
  );
};

export default Categories;
