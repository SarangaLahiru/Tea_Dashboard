import React, { useEffect, useState } from "react";

import ProductGrades from "../components/ProductGrades";
import RecentProjects from "../components/RecentProjects";
import DashboardLayout from "../components/DashboardLayout";
import MetricsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import CalendarSection from "../components/CalendarComponent";
import axios from "axios";
import Form from "../components/Form";
import { BiCheckCircle, BiPackage, BiXCircle } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import FormData from "../components/Form";

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
          <MetricsCard
            title="Total Harvest"
            value={quantity}
            icon={<BiPackage className="text-green-600" />}
            bgColor="bg-green-50"
            textColor="text-green-700"
          />
          <MetricsCard
            title="Request Product"
            value={prod}
            icon={<CgShoppingCart className="text-blue-600" />}
            bgColor="bg-blue-50"
            textColor="text-blue-700"
          />
          <MetricsCard
            title="Rejected Weight"
            value={reject}
            icon={<BiXCircle className="text-red-600" />}
            bgColor="bg-red-50"
            textColor="text-red-700"
          />
          <MetricsCard
            title="Rate of Acceptance"
            value={prod_rate}
            icon={<BiCheckCircle className="text-purple-600" />}
            bgColor="bg-purple-50"
            textColor="text-purple-700"
          />
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
