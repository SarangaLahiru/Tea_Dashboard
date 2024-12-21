import React, { useState } from "react";
import { FaCalendarAlt, FaFilter } from "react-icons/fa";

const projectsData = [
  { route: "A route", progress: 80, dueDate: "23 Aug 2023", status: "In Progress" },
  { route: "B route", progress: 60, dueDate: "16 Aug 2023", status: "In Progress" },
  { route: "C route", progress: 49, dueDate: "29 Jul 2023", status: "In Progress" },
  { route: "D route", progress: 100, dueDate: "22 Jun 2023", status: "Finished" },
  { route: "E route", progress: 20, dueDate: "01 Jan 2023", status: "Unfinished" },
  { route: "F route", progress: 20, dueDate: "01 Jan 2023", status: "In Progress" },
  { route: "G route", progress: 40, dueDate: "15 Aug 2023", status: "In Progress" },
  { route: "H route", progress: 70, dueDate: "01 Dec 2023", status: "Finished" },
];

const statusColors = {
  "In Progress": "bg-orange-100 text-orange-600",
  Finished: "bg-green-100 text-green-600",
  Unfinished: "bg-red-100 text-red-600",
};

const RecentProjects = () => {
  // State to manage data
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Handle pagination
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle filter (simple demo: filter projects with progress > 50)
  const handleFilter = () => {
    setFilteredProjects(projectsData.filter((project) => project.progress > 50));
    setCurrentPage(1); // Reset to first page
  };

  // Handle resetting filters
  const resetFilter = () => {
    setFilteredProjects(projectsData);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white rounded shadow p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Recent Projects</h3>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-3 py-1 text-sm bg-gray-100 rounded">
            <FaCalendarAlt className="mr-2" /> Select Due Date
          </button>
          <button
            onClick={handleFilter}
            className="flex items-center px-3 py-1 text-sm bg-gray-100 rounded"
          >
            <FaFilter className="mr-2" /> Apply Filter
          </button>
          <button
            onClick={resetFilter}
            className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded"
          >
            Reset Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2">Road</th>
            <th className="text-left p-2">Progress</th>
            <th className="text-left p-2">Due Date</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-2">
                <div className="flex items-center">
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold`}
                  >
                    {project.route[0]}
                  </span>
                  <div className="ml-2">
                    <p>{project.route}</p>
                    <p className="text-xs text-gray-400">123456</p>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="w-full bg-gray-200 rounded h-2">
                  <div
                    className={`h-2 rounded ${
                      project.progress === 100 ? "bg-green-500" : "bg-orange-500"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{project.progress}%</p>
              </td>
              <td className="p-2">{project.dueDate}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 rounded text-xs font-semibold ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <p className="text-gray-500">
          Showing {(currentPage - 1) * projectsPerPage + 1}-
          {Math.min(currentPage * projectsPerPage, filteredProjects.length)} of{" "}
          {filteredProjects.length}
        </p>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
