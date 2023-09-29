async function getData() {
  const res = await fetch(process.env.BASE_URL + "FeaturedProject");
  if (!res.ok) {
    throw new Error("Feature Project calling fail");
  }
  return res.json();
}
const FeaturedProject = async () => {
  const data = await getData();

  return (
    <div className="flex flex-wrap -mx-4 mb-4 p-10">
      {data.map((item, i) => {
        return (
          <div key={i} className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <a
              target="_blank"
              href={item["live"]}
              className="block relative group"
            >
              <div className="h-80 w-full mx-auto overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
                <img
                  className="h-full w-full object-cover transform scale-100 transition-transform group-hover:scale-110"
                  src={item["image"]}
                  alt=""
                />
              </div>
              <div className="mt-3 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm mt-2">{item.created_at}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProject;
