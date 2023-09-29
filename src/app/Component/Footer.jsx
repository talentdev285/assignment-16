import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white p-10">
      <label className="text-lg font-bold mr-4">
        Design<span className="text-red-500">AGENCY</span>
      </label>
      <div className="flex gap-4">
        <div className="flex-1">
          <p>
            Some footer text about the Agency. <br /> Just a little description{" "}
            <br />
            to help people understand you better
          </p>
        </div>
        <div className="flex-1">
          <p className="font-normal">Quick Links</p>
          <p className="font-normal">Portfolio</p>
          <p className="font-normal">About Us</p>
          <p className="font-normal">Contact Us</p>
        </div>
        <div className="flex-1">
          <p className="font-normal">Address</p>
          <p className="font-normal">
            Design Agency Head Office. <br /> Airport Road United Arab Emirate
          </p>
        </div>
      </div>
      <p className="mt-4">Copyright Design Agency 2022</p>
    </div>
  );
}
