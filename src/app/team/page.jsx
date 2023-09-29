import React from "react";
import Team from "../Component/ComponentTeam/Team";
import TeamMember from "../Component/ComponentTeam/TeamMember";
import Subscribe from "../Component/Subscribe";

export default function page() {
  return (
    <div>
      <Team />
      <TeamMember />
      <Subscribe />
    </div>
  );
}
