"use client";
import { useEffect, useState } from "react";

export default function Brands() {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://agency.teamrabbil.com/api/BrandList"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setBrandList(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-row justify-center">
      {brandList.map((brand, index) => (
        <div
          key={index}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-10 mx-14"
        >
          <img src={brand.image} alt={brand.name} className="w-h" />
        </div>
      ))}
    </div>
  );
}
