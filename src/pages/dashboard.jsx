import React from "react";

import ProductGrades from "../components/ProductGrades";
import RecentProjects from "../components/RecentProjects";
import DashboardLayout from "../components/DashboardLayout";
import MetricsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import CalendarSection from "../components/CalendarComponent";

const Dashboard = () => {
  return (
    <DashboardLayout>
    <div className="p-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Top Metrics Cards */}
      <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsCard title="Total Harvest" value="6,784" />
        <MetricsCard title="Request Product" value="1,920" />
        <MetricsCard title="Rejected Weight" value="4,412" />
        <MetricsCard title="Rate of Acceptance" value="329" />
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
