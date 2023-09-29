"use client";

import { useEffect, useState } from "react";

const TeamMember = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/TeamList")
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamData.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-center mb-2">
              <i
                className={`fa fa-${member.social_media}`}
                aria-hidden="true"
              ></i>
            </div>
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
