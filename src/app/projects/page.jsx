import React from "react";
import Nav from "../Component/ComponentsAllProjects/Nav";
import AllProjects from "../Component/ComponentsAllProjects/AllProjects";
import Subscribe from "../Component/Subscribe";

export default function page() {
  return (
    <div>
      <Nav />
      <AllProjects />
      <Subscribe />
    </div>
  );
}
