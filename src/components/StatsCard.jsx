import React from "react";

const MetricsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded shadow p-4 flex items-center justify-between">
      <div>
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="text-4xl text-gray-400">{icon}</div>
    </div>
  );
};

export default MetricsCard;
