import React from "react";

const CategoryList = ({ categories }) => {
  return (
    <ul className="list-none">
      {categories.map((category) => (
        <li key={category.id} className="p-2 border-b">
          {category.category_name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
