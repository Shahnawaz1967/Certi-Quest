import React from "react";

const CertificateList = ({ certificates }) => (
  <ul className="border p-4">
    {certificates.map((cert) => (
      <li key={cert.id} className="mb-2">
        <strong>{cert.certificate_title}</strong>: {cert.questions} (Category: {cert.category_name}) {/* Updated */}
      </li>
    ))}
  </ul>
);

export default CertificateList;
