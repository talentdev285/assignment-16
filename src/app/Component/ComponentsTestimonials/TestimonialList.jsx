async function getData() {
  const res = await fetch(process.env.BASE_URL + "TestimonialList");
  if (!res.ok) {
    throw new Error("Testimonials called fail");
  }
  return res.json();
}

const TestimonialList = async () => {
  const data = await getData();
  return (
    <div className="p-10">
      <span className="text-green-500">ALL PROJECTS</span>
      <h2>Better Agency/SEO Solution At Your Fingertips</h2>

      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              className=" h-32 mx-auto rounded-full object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="p-10 text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h2>
              <h3 className="text-lg text-gray-600">{item.designation}</h3>
              <p className="text-gray-700 mt-2">{item.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
