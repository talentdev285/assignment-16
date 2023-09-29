import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "AllProject");
  if (!res.ok) {
    throw new Error("AllService calling fail");
  }
  return res.json();
}

const AllProjects = async () => {
  const data = await getData();
  return (
    <div className="p-10">
      <span className="text-green-500">ALL PROJECTS</span>
      <h2>Better Agency/SEO Solution At Your Fingertips</h2>

      <div className="flex flex-wrap justify-center -mx-4">
        {data.map((item, i) => {
          return (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <div className="bg-white shadow-md rounded-lg p-4">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjects;
