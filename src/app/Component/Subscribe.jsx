import React from "react";

export default function Subscribe() {
  return (
    <div className="flex justify-center items-center m-6">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div>
          <span className="text-green-500 text-lg font-semibold">
            SUBSCRIBE
          </span>
          <h2 className="text-2xl font-bold mt-2">
            Subscribe to get the latest news about us
          </h2>
          <p className="text-gray-600 mt-2">
            Please drop your email below to get daily updates about what we do
          </p>
        </div>

        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border-2 border-blue-500 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
