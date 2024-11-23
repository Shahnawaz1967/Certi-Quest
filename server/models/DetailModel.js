import db from "../config/db.js";

const Detail = {
  getAll: async () => {
    const [rows] = await db.query(
      `SELECT Details.*, Master.category_name 
       FROM Details 
       JOIN Master ON Details.master_id = Master.id`
    );
    return rows;
  },

  create: async (certificate_title, questions, master_id) => { // Updated to use 'questions'
    const [result] = await db.query(
      "INSERT INTO Details (certificate_title, questions, master_id) VALUES (?, ?, ?)", // Updated column name
      [certificate_title, questions, master_id] // Updated to 'questions'
    );
    return { id: result.insertId, certificate_title, questions, master_id }; // Updated to 'questions'
  },
};

export default Detail;
