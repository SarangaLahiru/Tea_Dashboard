import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueChart = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Daily");

  // Data for different tabs
  const chartData = {
    Daily: [50, 60, 80, 90, 100, 120, 140],
    Weekly: [300, 450, 600, 500, 700, 800, 900],
    Monthly: [1200, 1500, 1700, 1900, 2200, 2400, 2700],
    Yearly: [15000, 17000, 19000, 20000, 22000, 24000, 26000],
  };

  // X-axis labels for different tabs
  const chartLabels = {
    Daily: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    Weekly: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
    Monthly: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    Yearly: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
  };

  // Chart.js data configuration
  const data = {
    labels: chartLabels[activeTab], // Dynamically update x-axis labels
    datasets: [
      {
        label: "Requested",
        backgroundColor: "#34c759", // Green color
        data: chartData[activeTab], // Dynamically update data
      },
      {
        label: "Rejected",
        backgroundColor: "#ff3b30", // Red color
        data: chartData[activeTab].map((value) => value * 0.2), // 20% of requested data
      },
    ],
  };

  return (
    <div className="bg-white rounded shadow p-4 h-[500px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">Revenue</h3>
          <p className="text-sm text-gray-500">Your Revenue Overview</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2">
          {["Daily", "Weekly", "Monthly", "Yearly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === tab
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
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

      {/* Bar Chart */}
      <div className="h-[300px]">
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }, // Hide default legend
              tooltip: { enabled: true }, // Enable tooltips
            },
            scales: {
              x: {
                grid: { display: false }, // Hide x-axis grid lines
              },
              y: {
                ticks: {
                  callback: (value) => `$${value / 1000}k`, // Format y-axis ticks
                },
                grid: { color: "#e5e7eb" }, // Light gray grid color
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default RevenueChart;
