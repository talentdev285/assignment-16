async function getData() {
  const res = await fetch(process.env.BASE_URL + "AllService");
  if (!res.ok) {
    throw new Error("AllService calling fail");
  }
  return res.json();
}

const AllService = async () => {
  const data = await getData();
  return (
    <div className="p-8   ">
      <p className="text-lg text-green-600">OUR ALL SERVICES</p>
      <h2 className="text-3xl font-bold mb-4">
        We Provide Best Web Design Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, i) => {
          return (
            <div key={i} className="w-full">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                <h1 className="text-xl font-semibold text-gray-800">
                  {item.tag}
                </h1>
                <img
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                  src={item.image1}
                  alt={item.title}
                />
                <h2 className="text-2xl font-bold text-gray-900 mt-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 mt-2">{item.des}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                <h1 className="text-xl font-semibold text-gray-800">
                  {item.tag}
                </h1>
                <img
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                  src={item.image2}
                  alt={item.title}
                />
                <h2 className="text-2xl font-bold text-gray-900 mt-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 mt-2">{item.des}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                <h1 className="text-xl font-semibold text-gray-800">
                  {item.tag}
                </h1>
                <img
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                  src={item.image3}
                  alt={item.title}
                />
                <h2 className="text-2xl font-bold text-gray-900 mt-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 mt-2">{item.des}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                <h1 className="text-xl font-semibold text-gray-800">
                  {item.tag}
                </h1>
                <img
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                  src={item.image4}
                  alt={item.title}
                />
                <h2 className="text-2xl font-bold text-gray-900 mt-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 mt-2">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllService;
