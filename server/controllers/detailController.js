import Detail from "../models/DetailModel.js";

// Get all details
export const getAllDetails = async (req, res) => {
  try {
    const certificates = await Detail.getAll();
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch certificates", error });
  }
};

// Create a new certificate
export const createCertificate = async (req, res) => {
  try {
    const { certificate_title, questions, master_id } = req.body; 
    const certificate = await Detail.create(certificate_title, questions, master_id); 
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ message: "Failed to create certificate", error });
  }
};
