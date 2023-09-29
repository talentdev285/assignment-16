"use client";

import { useEffect, useState } from "react";

export default function StatList() {
  const [statData, setStatData] = useState({
    id: null,
    followers: "",
    solved: "",
    customers: "",
    projects: "",
    created_at: "",
    updated_at: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://agency.teamrabbil.com/api/StatList"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setStatData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Followers</h3>
          <p className="text-gray-600">{statData.followers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Solved</h3>
          <p className="text-gray-600">{statData.solved}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Customers</h3>
          <p className="text-gray-600">{statData.customers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <p className="text-gray-600">{statData.projects}</p>
        </div>
      </div>
    </div>
  );
}
