import axios from "axios";
import React, { useEffect, useState } from "react";

const grades = [
  { type: "Best", grade: "A grade", total_quantity: 0, color: "bg-green-100 text-green-700" },
  { type: "Below_Best", grade: "B grade", total_quantity: 0, color: "bg-blue-100 text-blue-700" },
];

function ProductGrades() {
  const [grade, setGrade] = useState(grades);

  useEffect(() => {
    const fetchGrade = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/type_quntity/?target_date=${new Date()
            .toISOString()
            .slice(0, 10)}`
        );
        const data = response.data;
        setGrade(prevGrades => {
          const updatedGrades = data.map(item => {
            const existing = prevGrades.find(g => g.type === item.type);
            return existing
              ? { ...item, color: existing.color } // Keep color from existing
              : { ...item, color: "bg-gray-100 text-black" }; // Default color for new items
          });

          return updatedGrades;
        });
        console.log("Grades fetched:",grade);
      } catch (error) {
        console.error("Error fetching grades:", error);
      }
    };

    fetchGrade();
  }, []);
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-bold mb-4">All Product</h3>
      <ul>
        {grade.map((item, index) => (
          <li key={index} className={`p-2 rounded mb-2 ${item.color}`}>
            <div className="flex justify-between">
              <span>{item.grade}</span>
              <span>{item.type}</span>
              <span>{item.total_quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductGrades

