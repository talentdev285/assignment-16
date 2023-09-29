import AllService from "../Component/ComponentService/AllService";
import Service from "../Component/ComponentService/Service";
import Subscribe from "../Component/Subscribe";

export default function page() {
  return (
    <div>
      <Service />
      <AllService />
      <Subscribe />
    </div>
  );
}
