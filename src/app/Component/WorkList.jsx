"use client";
import { useEffect, useState } from "react";

export default function WorkList() {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://agency.teamrabbil.com/api/WorkList"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setWorkData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <span className="block text-green-500">WORK LIST</span>
      <br />
      <h2 className="text-lg text-gray-700 mb-4">
        We provide the Perfect Solution to your business growth
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
