import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
export const AppContext = createContext();

// Context Provider Component
export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);

  // Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Fetch questions for a specific category
  const fetchQuestionsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/categories/${categoryId}/questions`);
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <AppContext.Provider value={{ categories, questions, fetchQuestionsByCategory }}>
      {children}
    </AppContext.Provider>
  );
};
