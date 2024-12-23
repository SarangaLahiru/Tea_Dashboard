import React, { useEffect, useState } from "react";

import ProductGrades from "../components/ProductGrades";
import RecentProjects from "../components/RecentProjects";
import DashboardLayout from "../components/DashboardLayout";
import MetricsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import CalendarSection from "../components/CalendarComponent";
import axios from "axios";

const Dashboard = () => {

  const matrixData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/daily_supply_quantity/");
      return response.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  };

  const [data, setData] = useState({ quantity: 0, prod: 0, reject: 0, prod_rate: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const result = await matrixData();
      setData(result);
    };
    fetchData();
  }, []);

  const { quantity, prod, reject, prod_rate } = data;

  return (
    <DashboardLayout>
      <div className="p-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Top Metrics Cards */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricsCard title="Total Harvest" value={quantity} />
          <MetricsCard title="Request Product" value={prod} />
          <MetricsCard title="Rejected Weight" value={reject} />
          <MetricsCard title="Rate of Acceptance" value={prod_rate} />
        </div>

        {/* Revenue Chart */}
      <div className="col-span-1 md:col-span-2">
        <RevenueChart />
      </div>

      {/* Product Grades */}
      <div className="col-span-1">
        <ProductGrades />
      </div>

      {/* Recent Projects */}
      <div className="col-span-1 md:col-span-2">
        <RecentProjects />
      </div>

      {/* Calendar Section */}
      <div className="col-span-1">
        <CalendarSection />
      </div>
    </div>
  </DashboardLayout>
  );
};

export default Dashboard;
