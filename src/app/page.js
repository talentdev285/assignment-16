import Brands from "./Component/Brands";
import FeaturedProject from "./Component/FeaturedProject";

import Hero from "./Component/Hero";
import StatList from "./Component/StatList";
import Subscribe from "./Component/Subscribe";
import WorkList from "./Component/WorkList";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <Subscribe />
    </div>
  );
}
