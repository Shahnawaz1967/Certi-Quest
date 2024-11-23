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

  create: async (certificate_title, certificate_description, master_id) => {
    const [result] = await db.query(
      "INSERT INTO Details (certificate_title, certificate_description, master_id) VALUES (?, ?, ?)",
      [certificate_title, certificate_description, master_id]
    );
    return { id: result.insertId, certificate_title, certificate_description, master_id };
  },
};

export default Detail;
