import React from "react";

const AdmitCard = ({ pdf }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Admit Card</h2>
      <iframe
        src={pdf}
        title="Admit Card PDF"
        className="border border-gray-300"
        style={{ width: "100%", height: "100vh"}}
      />
    </div>
  );
};

export default AdmitCard;
