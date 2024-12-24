import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

let chartData = [
  { date: "", day_name: "Sunday", total_prod: 0, total_reject: 0 },
  { date: "", day_name: "Monday", total_prod: 0, total_reject: 0 },
  { date: "", day_name: "Tuesday", total_prod: 0, total_reject: 0 },
  { date: "", day_name: "Wednesday", total_prod: 0, total_reject: 0 },
  { date: "", day_name: "Thursday", total_prod: 0, total_reject: 0 },
  { date: "", day_name: "Friday", total_prod: 0, total_reject: 0 },
  { date: "", day_name: "Saturday", total_prod: 0, total_reject: 0 },
];

const RevenueChart = () => {
  const [activeTab, setActiveTab] = useState("Daily");
  const [daily, setDaily] = useState(chartData);

  useEffect(() => {
    const fetchDaily = async () => {
      try {
        const response = await axios.get("http://localhost:8000/weekly_supply/");
        const data = response.data;
        setDaily(() =>
          chartData.map((defaultData) => {
            const existing = data.find((g) => g.day_name === defaultData.day_name);
            return existing ? { ...defaultData, ...existing } : defaultData;
          })
        );
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchDaily();
  }, []);
  console.log("Daily data fetched:", daily);
  console.log("Daily data fetched:", chartData);
  const data = {
    labels: daily.map((val) => val.day_name), // Use day_name for labels
    datasets: [
      {
        label: "Requested",
        backgroundColor: "#34c759",
        data: daily.map((val) => val.total_prod), 
      },
      {
        label: "Rejected",
        backgroundColor: "#ff3b30",
        data: daily.map((val) => val.total_reject), 
      },
    ],
  };
  return (
    <div className="bg-white rounded shadow p-4 h-[500px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">Revenue</h3>
          <p className="text-sm text-gray-500">Your Revenue Overview</p>
        </div>
        <div className="flex space-x-2">
          {["Daily", "Weekly", "Monthly", "Yearly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === tab ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-600">Requested</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-600">Rejected</span>
        </div>
      </div>
      <div className="h-[300px]">
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: true },
              tooltip: { enabled: true },
            },
            scales: {
              x: { grid: { display: false } },
              y: { ticks: { callback: (value) => value }, grid: { color: "#e5e7eb" } },
            },
          }}
        />
      </div>
    </div>
  );
};

export default RevenueChart;
