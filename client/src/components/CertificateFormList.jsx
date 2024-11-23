import React, { useState } from "react";
import axios from "axios";

const CertificateForm = ({ onCertificateAdded }) => {
  const [certificate, setCertificate] = useState({
    certificate_title: "",
    certificate_description: "",
    master_id: "",
  });

  const handleChange = (e) => {
    setCertificate({ ...certificate, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/certificates", certificate);
      setCertificate({ certificate_title: "", certificate_description: "", master_id: "" });
      onCertificateAdded();
    } catch (error) {
      console.error("Error creating certificate:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="certificate_title"
        value={certificate.certificate_title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        name="certificate_description"
        value={certificate.certificate_description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 mr-2"
        required
      />
      <input
        type="number"
        name="master_id"
        value={certificate.master_id}
        onChange={handleChange}
        placeholder="Master ID"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Add Certificate
      </button>
    </form>
  );
};

export default CertificateForm;
