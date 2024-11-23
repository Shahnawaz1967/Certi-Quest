import React, { useState, useEffect } from "react";
import axios from "axios";
import CertificateList from "../components/CertificateList.jsx";
import CertificateForm from "../components/CertificateForm.jsx";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get("https://certi-quest.onrender.com/api/certificates");
      setCertificates(response.data);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Certificates</h1>
      <CertificateForm onCertificateAdded={fetchCertificates} />
      <CertificateList certificates={certificates} />
    </div>
  );
};

export default Certificates;
