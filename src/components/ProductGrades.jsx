import React from "react";

const grades = [
  { grade: "A grade", value: "1,400", color: "bg-green-100 text-green-700" },
  { grade: "B grade", value: "1,400", color: "bg-blue-100 text-blue-700" },
  { grade: "C grade", value: "1,400", color: "bg-red-100 text-red-700" },
];

const ProductGrades = () => (
  <div className="bg-white rounded shadow p-4">
    <h3 className="text-lg font-bold mb-4">All Product</h3>
    <ul>
      {grades.map((item, index) => (
        <li key={index} className={`p-2 rounded mb-2 ${item.color}`}>
          <div className="flex justify-between">
            <span>{item.grade}</span>
            <span>{item.value}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductGrades;
